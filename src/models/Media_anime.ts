import { postgress } from "../db/postgres";
import { QueryResult } from "pg";
import { saveBackupAnime } from "../utils/backup";

export default class Media_anime 
  {
    private id: number|undefined;
    private type: string|undefined;
    private name: string|undefined;
    private ext: string|undefined;
    private anime:string|undefined;

    constructor(id: number)
    {
      this.id = id;
    }

    public async obtenrUnAnime (pathFile:string):Promise<string>{     
      let content:string = pathFile;
      try{
        let result: QueryResult = await postgress
        .query(
        `SELECT ma.name, ma.extension, ma.type, ma.anime
          FROM  media_animes ma INNER JOIN anime a ON(a.siglas = ma.anime) 
          WHERE ma.id = ${this.id}`
        );
        if(result.rowCount > 0){
          var {name,extension,type,anime} = result.rows[0];
          content = anime+"/"+type+ "/"+name+"."+extension;
        }
      }catch(e) {
        console.log(e);
      };
      return content;
    }

    /**
     * Get the value of ext
     */
    public getExtension()
    {
      return this.ext;
    }

    /**
     * Set the value of extension
     *
     * @return  self
     */
    public setExtension(extension:string)
    {
      this.ext = extension;

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


     public async Obtener(){

    }

    public async insertar(){

    }

    public async Editar(){
        let sql = `UPDATE anime_temporadas temporada='${this.temporada}' WHERE anime='${this.anime}';`;
      console.log(sql);
      postgress
        .query(sql)
        .then((r: QueryResult) => {
          console.log(r);
          saveBackupAnime(this.anime,{'id':r.rows[0]}, r.rows[0], 'anime_media');
        })
        .catch((e: Error) => {
          next(e);
        })
    }

  }
