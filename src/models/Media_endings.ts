import { postgress } from "../db/postgres";
import { QueryResult } from "pg";

export default class Media_ending
  {
    private id: number|undefined;
    private type: string|undefined;
    private name: string|undefined;
    private ext: string|undefined;
    private ending:string|undefined;

    constructor(id: number)
    {
      this.id = id;
    }

    public async obtenrUnAnime (pathFile:string):Promise<string>{     
      let content:string = pathFile;
      try{
        let result: QueryResult = await postgress
        .query(
          `SELECT ma.name, ma.ext, ma.id, e.anime
          FROM media_endings ma inner join endings e ON(e.id = ma.ending)
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
     * Get the value of extension
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
    public setExtension(extension: string)
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
    public setType(type: string)
    {
      this.type = type;

      return this;
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
    public getEnding()
    {
      return this.ending;
    }

    /**
     * Set the value of ending
     *
     * @return  self
     */
    public setEnding(ending:string)
    {
      this.ending = ending;
    }
  }
