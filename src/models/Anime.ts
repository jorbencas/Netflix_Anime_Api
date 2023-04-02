import { postgress } from "../db/postgres";
import { QueryResult } from "pg";
import { saveBackupAnime } from "../utils/backup";

export default class Anime {
  private _tittle: string | undefined;
  private _sinopsis: string | undefined;
  private _siglas: string | undefined;
  private _state: string | undefined;
  private _date_publication: Date | undefined;
  private _date_finalization: Date | undefined;
  private _idioma: string | undefined;
  private _kind: string | undefined;

  constructor(tittle:string, sinopsis: string, siglas: string, state : string, date_publication: Date, date_finalization: Date, idioma: string, kind: string) {
    this._tittle = tittle;
    this._sinopsis = sinopsis
    this._siglas = siglas
    this._state = state
    this._date_publication = date_publication
    this._date_finalization = date_finalization
    this._idioma = idioma
    this._kind = kind
  }


    public get tittle(): string | undefined {
    return this._tittle;
  }
  public set tittle(value: string | undefined) {
    this._tittle = value;
  }

   public get sinopsis(): string | undefined {
    return this._sinopsis;
  }
  public set sinopsis(value: string | undefined) {
    this._sinopsis = value;
  }

    public get siglas(): string | undefined {
    return this._siglas;
  }
  public set siglas(value: string | undefined) {
    this._siglas = value;
  }

  public get state(): string | undefined {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  public get date_publication(): Date | undefined {
    return this._date_publication;
  }
  public set date_publication(value: Date | undefined) {
    this._date_publication = value;
  }

  public get date_finalization(): Date | undefined {
    return this._date_finalization;
  }
  public set date_finalization(value: Date | undefined) {
    this._date_finalization = value;
  }

    public get idioma(): string | undefined {
    return this._idioma;
  }
  public set idioma(value: string | undefined) {
    this._idioma = value;
  }

  public get kind(): string | undefined {
    return this._kind;
  }

  public set kind(value: string | undefined) {
    this._kind = value;
  }

  public async Obtener() :Promise<Boolean> {
     let sql = `SELECT siglas FROM animes WHERE siglas = $1;`
        console.log(sql);
let rest = false;
let result: QueryResult = await postgress
    .query(
      sql,
      [
        this._siglas
      ]
    ).then(()=>{
      rest = true;
    }).catch((err)=>{
      console.log(err)
      rest = false;
    })
    return rest;
  }

  public async insert():Promise<Boolean>{
    let sql = `INSERT INTO animes (tittle, sinopsis, siglas, state, date_publication, date_finalization, idiomas, kind) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`
        console.log(sql);
let rest = false;
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
    ).then(()=>{
      rest = true;
          saveBackupAnime(this._siglas,{'siglas':this._siglas}, result.rows, 'animes');
    }).catch((err)=>{
      console.log(err)
      rest = false;
    })
    return rest;
  }

  public async editar(){
    let sql = `UPDATE animes SET tittle = $1, sinopsis = $2, state = $3, date_publication = $4, date_finalization = $5, idiomas = $6, kind=$8 WHERE siglas=$7`
        console.log(sql);
let rest = false;
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
    ).then(()=>{
      rest = true;
          saveBackupAnime(this._siglas,{'siglas':this._siglas}, result.rows, 'animes');
    }).catch((err)=>{
      console.log(err)
      rest = false;
    })
    return rest;
  }
}