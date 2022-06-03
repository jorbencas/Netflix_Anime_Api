
  class Config_notification_profile 
  {
    private id;
    private kind;
    private profile;
    private sound;

    public __construct()
    {
      
    }


    /**
     * Get the value of sound
     */
    public getSound()
    {
      return this.sound;
    }

    /**
     * Set the value of sound
     *
     * @return  self
     */
    public setSound($sound)
    {
      this.sound = sound;

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
     * Get the value of kind
     */
    public getKind()
    {
      return this.kind;
    }

    /**
     * Set the value of kind
     *
     * @return  self
     */
    public setKind($kind)
    {
      this.kind = kind;

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
