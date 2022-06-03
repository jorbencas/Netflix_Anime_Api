
  class Clip 
  {
    private id;
    private title;
    private episode;
    private profile;
    private time;

    public __construct()
    {
      
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
     * Get the value of time
     */
    public getTime()
    {
      return this.time;
    }

    /**
     * Set the value of time
     *
     * @return  self
     */
    public setTime($time)
    {
      this->time = time;

      return this;
    }
  }
