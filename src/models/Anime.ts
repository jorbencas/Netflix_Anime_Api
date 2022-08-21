
  export default class Anime extends Model {
  {
    private siglas!: string;
    private idiomas!: string;
    private date_publication!: string;
    private date_finalization!: string;
    private state!: string;
    private kind!: string;
    private valorations!: number;
    private temporada!: string;
    private titulo !:   

    public __construct(siglas: string, idiomas: string, date_publication: string, date_finalization: string, state: string, kind: string, valorations: number, temporada: string) 
    {
      this.siglas = siglas;
      this.idiomas = idiomas;
      this.date_publication = date_publication;
      this.date_finalization = date_finalization;
      this.state = state;
      this.kind = kind;
      this.valorations = valorations;
      this.temporada = temporada;
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
    public setState(state: string)
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
    public setIdiomas(idiomas: string)
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

    public setSiglas(siglas : string)
    {
      this.siglas = siglas;

      return this;
    }

    public getDate_publication()
    {
      return this.date_publication;
    }

    public setDate_publication(date_publication : string)
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
    public setDate_finalization(date_finalization : string)
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
    public setKind(kind : string)
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
    public setValorations(valorations : number)
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
    public setTemporada(temporada : string)
    {
      this.temporada = temporada;

      return this;
    }
  }
