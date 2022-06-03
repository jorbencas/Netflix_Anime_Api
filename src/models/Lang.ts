 
 class Lang 
  {
    private id;
    private code;

    public __construct()
    {
      
    }

    /**
     * Get the value of code
     */ 
    public getCode()
    {
        return this.code;
    }

    /**
     * Set the value of code
     *
     * @return  self
     */ 
    public setCode($code)
    {
        this.code = code;

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
  }
