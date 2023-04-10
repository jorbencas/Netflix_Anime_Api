import { postgress } from "../db/postgres";
import { QueryResult } from "pg";
import { saveBackupAnime } from "../utils/backup";
import { makeFile } from "../utils";

export default class Media_anime 
  {
    private id: number;
    private type: string|undefined;
    private name: string|undefined;
    private ext: string|undefined;
    private anime:string|undefined;

    constructor()
    {
      this.id = 0;
    }

    public async obtenrUnAnime (pathFile:string):Promise<string>{     
      let content:string = pathFile;
      try{
        let result: QueryResult = await postgress
        .query(
        `SELECT ma.name, ma.ext, ma.type, ma.anime
          FROM  media_animes ma INNER JOIN anime a ON(a.siglas = ma.anime) 
          WHERE ma.id = ${this.id}`
        );
        if(result.rowCount > 0){
          var {name,ext,type,anime} = result.rows.shift();
          content = anime+"/"+type+ "/"+name+"."+ext;
        }
      }catch(e) {
        console.log(e);
      };
      return content;
    }

    /**
     * Get the value of ext
     */
    public getExt()
    {
      return this.ext;
    }

    /**
     * Set the value of ext
     *
     * @return  self
     */
    public setExt(ext:string)
    {
      this.ext = ext;

      return this;
    }

    /**
     * Get the value of name
     */
    public getName()
    {
      return this.name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */
    public setName(name:string)
    {
      this.name = name;
    }

    /**
     * Get the value of type
     */
    public getType()
    {
      return this.type;
    }

    /**
     * Set the value of type
     *
     * @return  self
     */
    public setType(type:string)
    {
      this.type = type;
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
    public setId(id:number)
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
    public setAnime(anime:string)
    {
      this.anime = anime;
    }

    public async Obtener():Promise<Boolean>{
      let sql = `SELECT id, anime, type FROM media_animes WHERE anime = $1 And type = $2;`
      console.log(sql);
      let rest = false;
      try {
        let result: QueryResult = await postgress.query(sql,[this.anime, this.type]);
        if(result.rowCount > 0){
          rest = true;
          this.setId(result.rows.shift().id);
        }
      } catch (err) {
        console.log("media" + err)
      }
      return rest;
    }

    public async insertar():Promise<Boolean>{
      let sql = `INSERT INTO media_animes (type, name, ext, anime) VALUES ($1, $2, $3, $4) RETURNING *;`
      let rest = false;
      try {
        let result: QueryResult = await postgress
        .query(
          sql,
          [
            this.type,
            this.name,
            this.ext,
            this.anime
          ]
        );
        if(result.rowCount > 0){
          try {
            console.log(sql);              
            let path = `${this.anime}/${this.type}`;
            await makeFile(path);
            this.setId(result.rows.shift().id);
            await saveBackupAnime(this.anime, {'id':this.getId().toString()}, result.rows[0], 'media_animes');
            rest = true;
          } catch (err) {
            console.log("media backup:"+err)
          }
        }
      } catch (err) {
        console.log("media" + err)
      }
      return rest;
    }

    public async Editar():Promise<Boolean>{
      let sql = `UPDATE media_animes SET name = $2, ext = $3 WHERE id=$1 RETURNING *;`;    
      let rest = false;
      try {
        let result: QueryResult = await postgress
        .query(
          sql,
          [
            this.id,
            this.name,
            this.ext
          ]
        );

        if(result.rowCount > 0){
          try {
            this.setId(result.rows.shift().id);   
            let path = `${this.anime}/${this.type}`;
            await makeFile(path);
            console.log(sql);
            console.log(this.getId());
            await saveBackupAnime(this.anime,{'id':this.getId().toString()}, result.rows[0], 'media_animes');
            rest = true;
          } catch (err) {
            console.log("media backup:"+err)
          }
        }
      } catch (err) {
        console.log("media" + err)
      }
      return rest;
    }
  }
