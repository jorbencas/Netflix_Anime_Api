
  class Collection 
  {
    private id;
    private name;
    private profile;

    public __construct()
    {
      
    }

    /**
     * Get the value of profile
     */
    public getProfile()
    {
      return this.profile;
    }

    /**
     * Set the value of profile
     *
     * @return  self
     */
    public setProfile($profile)
    {
      this.profile = profile;

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
