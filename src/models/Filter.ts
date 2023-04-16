
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
    public setId(id:number):void
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
    public setCode(code:string):void
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
    public setKind(kind:string):void
    {
      this.kind = kind;
    }
  }
