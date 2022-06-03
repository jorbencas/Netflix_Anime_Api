
  class Group 
  {
    private id;
    private name;

    public __construct()
    {
      
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
