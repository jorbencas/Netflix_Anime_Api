 export default class Episode {
    private id: number | undefined;
    private nombre: string | undefined ;
    private descripcion: string | undefined;
    private anime : number | undefined;
    private num: number| undefined;

    constructor(id:number, nombre: string, descripcion: string, anime : number, num: number) {
      this.id = id;
      this.nombre = nombre
      this.descripcion = descripcion
      this.anime = anime
      this.num = num
    }

    public getId () : number|undefined {
      return this.id;
    }

    public aetId (id:number) {
      this.id = id;
    }

    public getNombre () : string|undefined {
      return this.nombre;
    }

    public setNombre (nombre:string) {
      this.nombre = nombre;
    }

    public getDescripcion () : string|undefined {
      return this.descripcion;
    }

    public setDescripcion (descripcion:string) {
      this.descripcion = descripcion;
    }

    public getAnime () : number|undefined {
      return this.anime;
    }

    public setAnime (anime: number) {
      this.anime = anime;
    }

    public getNum () : number|undefined {
      return this.num;
    }

    public setNum (num: number) {
      this.num = num;
    }

//         public async Obtener(){
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