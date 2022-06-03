
  class Anime 
  {
    private siglas;
    private idiomas;
    private date_publication;
    private date_finalization;
    private state;
    private kind;
    private valorations;
    private temporada;

    public __construct()
    {
      
    }

    /**
     * Get the value of state
     */
    public getState()
    {
      return this.state;
    }

    /**
     * Set the value of state
     *
     * @return  self
     */
    public setState($state)
    {
      this.state = state;

      return this;
    }

    /**
     * Get the value of idiomas
     */
    public getIdiomas()
    {
      return this.idiomas;
    }

    /**
     * Set the value of idiomas
     *
     * @return  self
     */
    public setIdiomas($idiomas)
    {
      this.idiomas = idiomas;

      return this;
    }

    /**
     * Get the value of siglas
     */
    public getSiglas()
    {
      return this.siglas;
    }

    public setSiglas($siglas)
    {
      this.siglas = siglas;

      return this;
    }

    public getDate_publication()
    {
      return this.date_publication;
    }

    public setDate_publication($date_publication)
    {
      this.date_publication = date_publication;

      return this;
    }

    /**
     * Get the value of date_finalization
     */
    public getDate_finalization()
    {
      return this.date_finalization;
    }

    /**
     * Set the value of date_finalization
     *
     * @return  self
     */
    public setDate_finalization($date_finalization)
    {
      this.date_finalization = date_finalization;

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
     * Get the value of valorations
     */
    public getValorations()
    {
      return this.valorations;
    }

    /**
     * Set the value of valorations
     *
     * @return  self
     */
    public setValorations($valorations)
    {
      this.valorations = valorations;

      return this;
    }

    /**
     * Get the value of temporada
     */
    public getTemporada()
    {
      return this.temporada;
    }

    /**
     * Set the value of temporada
     *
     * @return  self
     */
    public setTemporada($temporada)
    {
      this.temporada = temporada;

      return this;
    }
  }
