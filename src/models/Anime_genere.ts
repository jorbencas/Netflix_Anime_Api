import { postgress } from "../db/postgres";
import { QueryResult } from "pg";
import { saveBackupAnime } from "../utils/backup";

export default class Anime_genere 
  {
    private id!: number;
    private genere!: string;
    private anime!: string;

    constructor(genere: string, anime: string) {
      this.genere = genere;
      this.anime = anime;
    }

    /**
     * Get the value of id
     */
    public getId()
    {
      return this.id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */
    public setId(id: number)
    {
      this.id = id;
    }

    /**
     * Get the value of anime
     */
    public getAnime()
    {
      return this.anime;
    }

    /**
     * Set the value of anime
     *
     * @return  self
     */
    public setAnime(anime : string)
    {
      this.anime = anime;
    }

    /**
     * Get the value of genere
     */
    public getGenere()
    {
      return this.genere;
    }

    /**
     * Set the value of genere
     *
     * @return  self
     */
    public setGenere(genere : string)
    {
      this.genere = genere;
    }

    public async Obtener():Promise<Boolean>{
      let sql = `SELECT id, anime, genere FROM anime_generes WHERE anime = $1 And genere = $2;`
      let rest = false;
      try {
        let result: QueryResult = await postgress.query(sql,[this.anime, this.genere]);
        console.log(sql);
        if(result.rowCount > 0){
          rest = true;
          this.setId(result.rows.shift().id);
        }
      } catch (err) {
        console.log("genere obtener:"+err)
      }
      return rest;
    }

    public async insertar():Promise<Boolean>{
      let sql = `INSERT INTO anime_generes (genere, anime) VALUES ('${this.genere}', '${this.anime}') RETURNING *;`;
      let rest = false;
      try {
        let existe = await this.Obtener();
        if (!existe) {    
          let result: QueryResult = await postgress.query(sql);
          if(result.rowCount > 0){
            try {
              console.log(sql);
              this.setId(result.rows.shift().id);
              await saveBackupAnime(this.anime,{'id':this.getId().toString()}, result.rows[0], 'anime_generes'); 
              rest = true;
            } catch (err) {
              console.log("generes backup:"+err)
            }
          }
        } else {
            try {              
              let data = {
                id:this.getId(),
                genere:this.getGenere(),
                anime:this.getAnime()
              };
              await saveBackupAnime(this.getAnime(),{'id':this.getId().toString()}, data, 'anime_generes'); 
              rest = true;
            } catch (err) {
              console.log("generes backup:"+err)
            }
        }
      } catch (err) {
        console.log("genere insert:"+err)
      }
      return rest;
    }
  }
