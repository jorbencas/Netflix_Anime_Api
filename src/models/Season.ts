
  class Season 
  {
    private id;
    private title;

    public __construct()
    {
      
    }


    /**
     * Get the value of title
     */
    public getTitle()
    {
      return this.title;
    }

    /**
     * Set the value of title
     *
     * @return  self
     */
    public setTitle($title)
    {
      this.title = title;

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
