
  class Translation_filter 
  {
    private id;
    private translation;
    private lang;
    private id_external;


    public __construct()
    {
      
    }

    /**
     * Get the value of lang
     */
    public getLang()
    {
      return this.lang;
    }

    /**
     * Set the value of lang
     *
     * @return  self
     */
    public setLang($lang)
    {
      this.lang = lang;

      return this;
    }

    /**
     * Get the value of translation
     */
    public getTranslation()
    {
      return this.translation;
    }

    /**
     * Set the value of translation
     *
     * @return  self
     */
    public setTranslation($translation)
    {
      this.translation = translation;

      return this;
    }

    /**
     * Get the value of id_external
     */
    public getId_external()
    {
      return this.id_external;
    }

    /**
     * Set the value of id_external
     *
     * @return  self
     */
    public setId_external($id_external)
    {
      this.id_external = id_external;

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
