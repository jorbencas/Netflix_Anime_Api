
  class Notification 
  {
    private id;
    private name;
    private avaible;
    private config;

    public __construct()
    {
      
    }

    /**
     * Get the value of config
     */
    public getConfig()
    {
      return this.config;
    }

    /**
     * Set the value of config
     *
     * @return  self
     */
    public setConfig($config)
    {
      this.config = config;

      return this;
    }

    /**
     * Get the value of avaible
     */
    public getAvaible()
    {
      return this.avaible;
    }

    /**
     * Set the value of avaible
     *
     * @return  self
     */
    public setAvaible($avaible)
    {
      this.avaible = avaible;

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
