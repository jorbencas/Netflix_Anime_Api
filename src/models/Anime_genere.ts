
  class Anime_genere 
  {
    private id!: number;
    private genere!: number;
    private anime!: string;

    public __construct(id: number, genere: number, anime: string) {
      this.id = id;
      this.genere = genere;
      this.anime = anime;
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
    public setId(id: number)
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
    public setAnime(anime : string)
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
    public setGenere(genere : number)
    {
      this.genere = genere;

      return this;
    }
  }
