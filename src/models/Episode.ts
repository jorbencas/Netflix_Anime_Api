
  class Episode 
  {
    private id;
    private anime;
    private num;
    private seasion;
    private madia_type;
    private madia_name;
    private madia_extension;

    public __construct()
    {
      parent::__construct();
    }


    /**
     * Get the value of seasion
     */
    public getSeasion()
    {
      return this.seasion;
    }

    /**
     * Set the value of seasion
     *
     * @return  self
     */
    public setSeasion($seasion)
    {
      this.seasion = seasion;

      return this;
    }

    /**
     * Get the value of madia_name
     */
    public getMadia_name()
    {
      return this.madia_name;
    }

    /**
     * Set the value of madia_name
     *
     * @return  self
     */
    public setMadia_name($madia_name)
    {
      this.madia_name = madia_name;

      return this;
    }

    /**
     * Get the value of madia_type
     */
    public getMadia_type()
    {
      return this.madia_type;
    }

    /**
     * Set the value of madia_type
     *
     * @return  self
     */
    public setMadia_type($madia_type)
    {
      this.madia_type = madia_type;

      return this;
    }

    /**
     * Get the value of madia_extension
     */
    public getMadia_extension()
    {
      return this.madia_extension;
    }

    /**
     * Set the value of madia_extension
     *
     * @return  self
     */
    public setMadia_extension($madia_extension)
    {
      this.madia_extension = madia_extension;

      return this;
    }

    /**
     * Get the value of num
     */
    public getNum()
    {
      return this.num;
    }

    /**
     * Set the value of num
     *
     * @return  self
     */
    public setNum($num)
    {
      this.num = num;

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
    public function setId($id)
    {
      this.id = id;

      return this;
    }
  }
