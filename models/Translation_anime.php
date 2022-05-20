 <?php
  class Translation_anime extends Database
  {
    private $id;
    private $translation;
    private $kind;
    private $lang;
    private $anime;

    public function __construct()
    {
      parent::__construct();
    }


    /**
     * Get the value of id
     */
    public function getId()
    {
      return $this->id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */
    public function setId($id)
    {
      $this->id = $id;

      return $this;
    }

    /**
     * Get the value of translation
     */
    public function getTranslation()
    {
      return $this->translation;
    }

    /**
     * Set the value of translation
     *
     * @return  self
     */
    public function setTranslation($translation)
    {
      $this->translation = $translation;

      return $this;
    }

    /**
     * Get the value of kind
     */
    public function getKind()
    {
      return $this->kind;
    }

    /**
     * Set the value of kind
     *
     * @return  self
     */
    public function setKind($kind)
    {
      $this->kind = $kind;

      return $this;
    }

    /**
     * Get the value of lang
     */
    public function getLang()
    {
      return $this->lang;
    }

    /**
     * Set the value of lang
     *
     * @return  self
     */
    public function setLang($lang)
    {
      $this->lang = $lang;

      return $this;
    }

    /**
     * Get the value of anime
     */
    public function getAnime()
    {
      return $this->anime;
    }

    /**
     * Set the value of anime
     *
     * @return  self
     */
    public function setAnime($anime)
    {
      $this->anime = $anime;

      return $this;
    }
  }
