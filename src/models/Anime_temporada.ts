import { postgress } from "../db/postgres";
import { QueryResult } from "pg";
import { saveBackupAnime } from "../utils/backup";
import Anime from "./Anime";

export default  class Anime_temporada 
  {
    private id!: number;
    private temporada!: string;
    private anime!: string;

    constructor(temporada: string, anime: string) {
      this.temporada = temporada;
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

      return this;
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

      return this;
    }

    /**
     * Get the value of temporada
     */
    public getTemporada()
    {
      return this.temporada;
    }

    /**
     * Set the value of temporada
     *
     * @return  self
     */
    public setTemporada(temporada : string)
    {
      this.temporada = temporada;

      return this;
    }

    public async Obtener():Promise<Boolean> {
      let sql = `SELECT id, temporada, anime FROM anime_temporadas WHERE anime = $1 And temporada = $2;`
      let rest = false;
      try {
        let result: QueryResult = await postgress.query(sql,[this.anime, this.temporada]);
      console.log(sql);
        if(result.rowCount > 0){
          rest = true;
          this.setId(result.rows.shift().id);
        }
      } catch (err) {
        console.log("temporadas obtener:"+err)
      }
      return rest;
    }

    public async insertar():Promise<Boolean> {
      let sql = `INSERT INTO anime_temporadas (temporada, anime) VALUES ('${this.temporada}', '${this.anime}') RETURNING *;`;
      let rest = false;
      try {
        let existe = await this.Obtener();
        if (!existe) {
          let result: QueryResult = await postgress.query(sql);
          if(result.rowCount > 0){
            try {
              console.log(sql);
              this.setId(result.rows.shift().id);
              let anime = new Anime();
              anime.setSiglas(this.getAnime());
              let saga = await anime.Obtener() ? anime.getSaga(): '';
              await saveBackupAnime(saga,this.anime,{'id':this.getId().toString()}, result.rows[0], 'anime_temporadas');
              console.log(result.rows.shift());
              rest = true;
            } catch (err) {
              console.log("temporadas backup:"+err)
            }
          }
        } else {
          rest = true;
          try {
            let data = {
              id:this.getId(),
              anime:this.getAnime(),
              temporada:this.getTemporada()
            };
                        let anime = new Anime();
            anime.setSiglas(this.getAnime());
            let saga = await anime.Obtener() ? anime.getSaga(): '';
            await saveBackupAnime(saga,this.getAnime(),{'id':this.getId().toString()}, data, 'anime_temporadas');
            rest = true;
          } catch (err) {
            console.log("temporadas backup:"+err)
          }
        }
      } catch (err) {
        console.log("temporadas insertar:"+err)
      }
      return rest;
    }
  }
