 <?php
  class Translation_filter extends Database
  {
    private $id;
    private $translation;
    private $lang;
    private $id_external;


    public function __construct()
    {
      parent::__construct();
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
     * Get the value of id_external
     */
    public function getId_external()
    {
      return $this->id_external;
    }

    /**
     * Set the value of id_external
     *
     * @return  self
     */
    public function setId_external($id_external)
    {
      $this->id_external = $id_external;

      return $this;
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
  }
