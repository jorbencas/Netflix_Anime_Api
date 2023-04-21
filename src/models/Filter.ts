
  class Filter 
  {
    private id: number | undefined;
    private code:string | undefined;
    private kind:string | undefined;

    constructor() {
  
    } 


    /**
     * Get the value of id
     */
    public getId(): number  | undefined 
    {
      return this.id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */
<<<<<<< HEAD
    public setId(id)
=======
    public setId(id:number):void
>>>>>>> b0d2a5507b35452b5ce69552e26babbc9b43b10c
    {
      this.id = id;
    }

    /**
     * Get the value of code
     */
    public getCode():string | undefined 
    {
      return this.code;
    }

    /**
     * Set the value of code
     *
     * @return  self
     */
<<<<<<< HEAD
    public setCode(code)
=======
    public setCode(code:string):void
>>>>>>> b0d2a5507b35452b5ce69552e26babbc9b43b10c
    {
      this.code = code;
    }

    /**
     * Get the value of kind
     */
    public getKind():string | undefined 
    {
      return this.kind;
    }

    /**
     * Set the value of kind
     *
     * @return  self
     */
<<<<<<< HEAD
    public setKind(kind)
=======
    public setKind(kind:string):void
>>>>>>> b0d2a5507b35452b5ce69552e26babbc9b43b10c
    {
      this.kind = kind;
    }
  }
