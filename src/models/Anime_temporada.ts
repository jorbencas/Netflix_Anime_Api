import { postgress } from "../db/postgres";
import { QueryResult } from "pg";
import { saveBackupAnime } from "../utils/backup";

export default  class Anime_temporada 
  {
    private id!: number;
    private temporada!: number;
    private anime!: string;

    public __construct(temporada: number, anime: string) {
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
    public setTemporada(temporada : number)
    {
      this.temporada = temporada;

      return this;
    }

    public async Obtener():Promise<Boolean> {

    }

    public async insertar():Promise<Boolean> {
      let sql = `INSERT INTO anime_temporadas (genere, anime) VALUES ('${temporada}', '${siglas}') RETURNING id;`;


             let r = await postgress.query(sql);
    saveBackupAnime(siglas,{'id':r.rows[0]}, r.rows[0], 'anime_temporadas');   
    
    }

    public async Editar():Promise<Boolean> {
        let sql = `UPDATE anime_temporadas temporada='${this.temporada}' WHERE anime='${this.anime}';`;
      console.log(sql);
      let rest = false;

      postgress
        .query(sql)
        .then((r: QueryResult) => {
          console.log(r);
          saveBackupAnime(this.anime,{'id':r.rows[0]}, r.rows[0], 'anime_temporadas');
                rest = true;

        })
        .catch((e: Error) => {
          console.log(e)
      rest = false;
    })
    return rest;
    }
  }
