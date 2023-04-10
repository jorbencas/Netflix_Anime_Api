import { postgress } from "../db/postgres";
import { QueryResult } from "pg";

export default class Media_opening
  {
    private id: number|undefined;
    private type: string|undefined;
    private name: string|undefined;
    private ext: string|undefined;
    private opening:string|undefined;

    constructor()
    {
    }

    public async obtenrUnAnime(pathFile:string):Promise<string>{     
      let content:string = pathFile;
      try{
        let result: QueryResult = await postgress
        .query(
          `SELECT ma.name, ma.ext, ma.id, e.anime
          FROM media_openings ma inner join openings e ON(e.id = ma.opening)
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
    public getOpening()
    {
      return this.opening;
    }

    /**
     * Set the value of opening
     *
     * @return  self
     */
    public setOpening(opening:string)
    {
      this.opening = opening;
    }

//     public async Obtener(){
//  let sql = `SELECT siglas FROM media_animes WHERE anime = $1;`
//         console.log(sql);
// let rest = false;
// let result: QueryResult = await postgress
//     .query(
//       sql,
//       [
//         this.anime
//       ]
//     ).then(()=>{
//       rest = true;
//     }).catch((err)=>{
//       console.log(err)
//       rest = false;
//     })
//     return rest;
//     }

//     public async insertar(){
//  let sql = `INSERT INTO media_animes (id, type, name, ext, anime) VALUES ($1, $2, $3, $4, $5) RETURNING *;`
//         console.log(sql);
// let rest = false;
// let result: QueryResult = await postgress
//     .query(
//       sql,
//       [
//         this.id,
//         this.type,
//         this.name,
//         this.ext,
//         this.anime
//       ]
//     ).then(()=>{
//       rest = true;
//               saveBackupAnime(this.anime,{'id':r.rows[0]}, r.rows[0], 'anime_media');

//     }).catch((err)=>{
//       console.log(err)
//       rest = false;
//     })
//     return rest;
//     }

//     public async Editar(){
//       let sql = `UPDATE media_animes SET name = $2, ext = $3, WHERE id=$1`
//         console.log(sql);
//       let rest = false;
//       let result: QueryResult = await postgress
//       .query(
//         sql,
//         [
//           this.id,
//           this.name,
//           this.ext
//         ]
//       ).then(()=>{
//         rest = true;
//         saveBackupAnime(this.anime,{'id':r.rows[0]}, r.rows[0], 'anime_media');
//       }).catch((err)=>{
//         console.log(err)
//         rest = false;
//       })
//       return rest;
//     }
    
  }
