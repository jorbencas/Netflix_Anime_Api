import { postgress } from "../db/postgres";

import { QueryResult } from "pg";
export default class Season 
  {
    private id:number|undefined;
    private title:string|undefined;
    private anime: string | undefined;

    constructor()
    {
      
    }


    /**
     * Get the value of title
     */
    public getTitle():string|undefined
    {
      return this.title;
    }

    /**
     * Set the value of title
     *
     * @return  self
     */
    public setTitle(title:string):void
    {
      this.title = title;
    }

    /**
     * Get the value of id
     */
    public getId():number | undefined
    {
      return this.id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */
    public setId(id: number) : void
    {
      this.id = id;
    }

    public getAnime(): string | undefined {
      return this.anime;
    }

    public setAnime(value: string):void {
      this.anime = value;
    }

    public async getOne():Promise<Boolean>{
      let obtenido = false;      
      try {
        let selected = await postgress.query(`SELECT tittle, anime FROM seasions WHERE id = ${this.getId}`);
        const {tittle, anime} = selected.rows.shift();
        this.setTitle(tittle);
        this.setAnime(anime);
        obtenido = true;
      } catch ((e: Error)=> {
        console.error(e.message);
      });
      return obtenido; 
    }

    public async insert(){
       const { tittle, siglas } = req.body;
    postgress
  .query(`INSERT INTO seasions(tittle,anime) VALUES('${tittle}', '${siglas}')`)
  .then((result: QueryResult) => {
    console.log(result);
    res.status(200).json(responseCustome("Se han obtenido la lista de ids de las seasions", 200, result))
  }).catch((err: Error) => {
    next(err);
  });
    }

    public async edit(){
       const { tittle, siglas } = req.body;
    postgress
  .query(`INSERT INTO seasions(tittle,anime) VALUES('${tittle}', '${siglas}')`)
  .then((result: QueryResult) => {
    console.log(result);
    res.status(200).json(responseCustome("Se han obtenido la lista de ids de las seasions", 200, result))
  }).catch((err: Error) => {
    next(err);
  });
    }

  }
