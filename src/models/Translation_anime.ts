
  export default class Translation_anime 
  {
    private id!: number;
    private translation!: string;
    private kind!: string;
    private lang!: number;
    private anime!: string;

    public __construct(id: number, translation: string, kind: string, lang: number, anime: string) {
      this.id = id;
      this.translation = translation;
      this.kind = kind;
      this.lang = lang;
      this.anime = anime;
    }


    /**
     * Get the value of id
     */
    public getId: any()
    {
      return this.id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */
    public setId(id : number)
    {
      this.id = id;

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
    public setTranslation(translation : string)
    {
      this.translation = translation;

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
    public setLang(lang : number)
    {
      this.lang = lang;

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
  }
