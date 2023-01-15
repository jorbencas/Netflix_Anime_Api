export default class Anime {
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

  }
