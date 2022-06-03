
  class Translation_episode 
  {
    private id;
    private translation;
    private lang;
    private episode;

    public __construct()
    {
      
    }


    /**
     * Get the value of episode
     */
    public getEpisode()
    {
      return this.episode;
    }

    /**
     * Set the value of episode
     *
     * @return  self
     */
    public setEpisode($episode)
    {
      this.episode = episode;

      return this;
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
