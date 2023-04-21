import { postgress } from "../db/postgres";
import { QueryResult } from "pg";
import { saveBackupAnime } from "../utils/backup";
import { resourceLimits } from "node:worker_threads";

export default class Anime {
  private _tittle: string | undefined;
  private _sinopsis: string | undefined;
  private _siglas: string | undefined;
  private _state: string | undefined;
  private _date_publication: Date | undefined;
  private _date_finalization: Date | undefined;
  private _idioma: string | undefined;
  private _kind: string | undefined;
  private _valorations: number | undefined;


  constructor(){

  }


  public getTittle(): string | undefined {
    return this._tittle;
  }
  public setTittle(value: string | undefined) {
    this._tittle = value;
  }

  public getSinopsis(): string | undefined {
    return this._sinopsis;
  }
  public setSinopsis(value: string | undefined) {
    this._sinopsis = value;
  }

    public getSiglas(): string | undefined {
    return this._siglas;
  }
  public setSiglas(value: string | undefined) {
    this._siglas = value;
  }

  public getState(): string | undefined {
    return this._state;
  }
  public setState(value: string | undefined) {
    this._state = value;
  }

  public getDate_publication(): Date | undefined {
    return this._date_publication;
  }
  public setDate_publication(value: Date | undefined) {
    this._date_publication = value;
  }

  public getDate_finalization(): Date | undefined {
    return this._date_finalization;
  }
  public setDate_finalization(value: Date | undefined) {
    this._date_finalization = value;
  }

  public getIdioma(): string | undefined {
    return this._idioma;
  }
  public setIdioma(value: string | undefined) {
    this._idioma = value;
  }

  public getKind(): string | undefined {
    return this._kind;
  }

  public setKind(value: string | undefined) {
    this._kind = value;
  }

  public getValorations(): number | undefined {
    return this._valorations;
  }
  public setValorations(value: number | undefined) {
    this._valorations = value;
  }

  public async Obtener():Promise<Boolean> {
    let sql = `SELECT siglas FROM animes WHERE siglas = $1;`
    console.log(sql);
    let rest = false;
    try {
      let result: QueryResult = await postgress.query(sql,[this._siglas]);
      if(result.rowCount > 0){
      rest = true;
      }
    } catch (err) {
      console.log(err)
    }
    return rest;
  }


  public async getOne(): Promise<Anime>{
    try {
      
    } catch (err: Error) {
        console.log(err);
    }



      postgress
  .query(
    `SELECT a.siglas, a.tittle, a.sinopsis, a.idiomas, a.date_publication, a.date_finalization, a.state, a.valorations, a.kind, 
    af.id as idFvorite, af.favorite as favorite,
    temp.tittle, temp.code, gen.tittle, gen.code,
    mb.type bannert, mb.idbanneri, mp.type portadat, mp.id portadat
    FROM animes a 
    INNER JOIN anime_favorite as af ON(af.anime = a.siglas)
    LEFT JOIN (
      SELECT f.tittle, f.code, ag.anime 
      FROM filters f inner join anime_generes ag
      ON(ag.temporada = f.code)
    ) as temp
    ON(temp.anime = a.siglas)
    LEFT JOIN (
      SELECT f.tittle, f.code, ag.anime 
      FROM filters f inner join anime_generes ag
      ON(ag.genere = f.code)
    )  AS gen
    ON(gen.anime = a.siglas)
    LEFT JOIN (
      SELECT type, name, ext, id_external 
      FROM media_anime 
      WHERE type = 'banner' 
    ) AS mb
    ON(mb.id_external = a.siglas)
    LEFT JOIN (
      SELECT type, name, ext, id_external 
      FROM media_anime 
      WHERE type = 'portada' 
    ) AS mp
    ON(mp.id_external = a.siglas)
    WHERE a.siglas = '${this.getSiglas}'`
  )
  .then((result: any) => {
    console.log(result);
    result = result.rows.shift();

  })
  .catch((e: Error) => {
    next(e);
  });


  return resourceLimits;
  }



  public async insert():Promise<Boolean>{
    let sql = `INSERT INTO animes (tittle, sinopsis, siglas, state, date_publication, date_finalization, idiomas, kind) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`
    
    let rest = false;
    try {
      let result: QueryResult = await postgress
      .query(
        sql,
        [
          this._tittle,
          this._sinopsis,
          this._siglas,
          this._state,
          this._date_publication,
          this._date_finalization,
          this._idioma,
          this._kind
        ]
      );
      if(result.rowCount > 0){
        try {     
          console.log(sql);     
          await saveBackupAnime(this._siglas,{'siglas':this._siglas}, result.rows.shift(), 'animes');
          rest = true;
        } catch (err) {
          console.log("anime backup:"+err)
        }
      }
    } catch (err) {
      console.log(err)
    }
    return rest;
  }

  public async editar(){
    let sql = `UPDATE animes SET tittle = $1, sinopsis = $2, state = $3, date_publication = $4, date_finalization = $5, idiomas = $6, kind = $7, valorations =$8 WHERE siglas = $9 RETURNING *;`
    let rest = false;
    try {
      let result: QueryResult = await postgress
        .query(
          sql,
          [
            this._tittle,
            this._sinopsis,            
            this._state,
            this._date_publication,
            this._date_finalization,
            this._idioma,
            this._kind,
            this._valorations,
            this._siglas
          ]
        );
      if(result.rowCount > 0){
        try {
          await saveBackupAnime(this._siglas,{'siglas':this._siglas}, result.rows.shift(), 'animes');
          rest = true;
        } catch (err) {
          console.log("anime backup:"+err)
        }
      }
    } catch (err) {
      console.log(err)
    }
    return rest;
  }
}