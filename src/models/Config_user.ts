
  class Config_user 
  {
    private id;
    private username;
    private limit_num_profiles;
    private see_video_profiles_time;

    public __construct()
    {
      
    }


    /**
     * Get the value of see_video_profiles_time
     */
    public getSee_video_profiles_time()
    {
      return this.see_video_profiles_time;
    }

    /**
     * Set the value of see_video_profiles_time
     *
     * @return  self
     */
    public setSee_video_profiles_time($see_video_profiles_time)
    {
      this.see_video_profiles_time = see_video_profiles_time;

      return this;
    }

    /**
     * Get the value of limit_num_profiles
     */
    public getLimit_num_profiles()
    {
      return this.limit_num_profiles;
    }

    /**
     * Set the value of limit_num_profiles
     *
     * @return  self
     */
    public setLimit_num_profiles($limit_num_profiles)
    {
      this.limit_num_profiles = limit_num_profiles;

      return this;
    }

    /**
     * Get the value of username
     */
    public getUsername()
    {
      return this.username;
    }

    /**
     * Set the value of username
     *
     * @return  self
     */
    public setUsername($username)
    {
      this.username = username;

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
