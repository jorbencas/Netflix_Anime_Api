
  class Anime_genere 
  {
    private id;
    private genere;
    private anime;

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
     * Get the value of genere
     */
    public getGenere()
    {
      return this.genere;
    }

    /**
     * Set the value of genere
     *
     * @return  self
     */
    public setGenere($genere)
    {
      this.genere = genere;

      return this;
    }
  }
