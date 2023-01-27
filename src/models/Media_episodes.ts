import { postgress } from "../db/postgres";
import { QueryResult } from "pg";

export default class Media_episodes 
  {
    private id: number|undefined;
    private type: string|undefined;
    private name: string|undefined;
    private extension: string|undefined;
    private anime:number|undefined;

    public __construct(id: number)
    {
      this.id = id;
    }


    public obtenrUnAnime(pathFile: string):string{
       postgress
  .query(
    `SELECT ma.name, ma.extension, ma.type, ma.id
    FROM media_episodes ma 
    WHERE ma.id = ${this.id}`
  )
  .then((result: QueryResult) => {
    pathFile = result;
  })
  .catch((e: Error) => {
    console.log(e);
  });

  return pathFile;
    }
    /**
     * Get the value of extension
     */
    public getExtension()
    {
      return this.extension;
    }

    /**
     * Set the value of extension
     *
     * @return  self
     */
    public setExtension($extension)
    {
      this.extension = extension;

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
    public setName($name)
    {
      this.name = name;

      return this;
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
    public setType($type)
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
    public setId($id)
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
    public setAnime($anime)
    {
      this.anime = anime;

      return this;
    }
  }
