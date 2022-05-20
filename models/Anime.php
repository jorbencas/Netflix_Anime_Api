 <?php
  class Anime extends Database
  {
    private $siglas;
    private $idiomas;
    private $date_publication;
    private $date_finalization;
    private $state;
    private $kind;
    private $valorations;
    private $temporada;

    public function __construct()
    {
      parent::__construct();
    }

    /**
     * Get the value of state
     */
    public function getState()
    {
      return $this->state;
    }

    /**
     * Set the value of state
     *
     * @return  self
     */
    public function setState($state)
    {
      $this->state = $state;

      return $this;
    }

    /**
     * Get the value of idiomas
     */
    public function getIdiomas()
    {
      return $this->idiomas;
    }

    /**
     * Set the value of idiomas
     *
     * @return  self
     */
    public function setIdiomas($idiomas)
    {
      $this->idiomas = $idiomas;

      return $this;
    }

    /**
     * Get the value of siglas
     */
    public function getSiglas()
    {
      return $this->siglas;
    }

    public function setSiglas($siglas)
    {
      $this->siglas = $siglas;

      return $this;
    }

    public function getDate_publication()
    {
      return $this->date_publication;
    }

    public function setDate_publication($date_publication)
    {
      $this->date_publication = $date_publication;

      return $this;
    }

    /**
     * Get the value of date_finalization
     */
    public function getDate_finalization()
    {
      return $this->date_finalization;
    }

    /**
     * Set the value of date_finalization
     *
     * @return  self
     */
    public function setDate_finalization($date_finalization)
    {
      $this->date_finalization = $date_finalization;

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
     * Get the value of valorations
     */
    public function getValorations()
    {
      return $this->valorations;
    }

    /**
     * Set the value of valorations
     *
     * @return  self
     */
    public function setValorations($valorations)
    {
      $this->valorations = $valorations;

      return $this;
    }

    /**
     * Get the value of temporada
     */
    public function getTemporada()
    {
      return $this->temporada;
    }

    /**
     * Set the value of temporada
     *
     * @return  self
     */
    public function setTemporada($temporada)
    {
      $this->temporada = $temporada;

      return $this;
    }
  }
