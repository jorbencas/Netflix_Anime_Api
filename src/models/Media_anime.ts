
  class Media_anime 
  {
    private id;
    private type;
    private name;
    private extension;
    private anime;

    public __construct()
    {
      
    }


    /**
     * Get the value of extension
     */
    public getExtension()
    {
      return this.extension;
    }

    /**
     * Set the value of extension
     *
     * @return  self
     */
    public setExtension($extension)
    {
      this.extension = extension;

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
    public setName($name)
    {
      this.name = name;

      return this;
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
    public setType($type)
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
    public setId($id)
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
    public setAnime($anime)
    {
      this.anime = anime;

      return this;
    }
  }
