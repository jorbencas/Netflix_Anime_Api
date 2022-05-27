 <?php
  class Anime_genere extends Database
  {
    private $id;
    private $genere;
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

    /**
     * Get the value of genere
     */
    public function getGenere()
    {
      return $this->genere;
    }

    /**
     * Set the value of genere
     *
     * @return  self
     */
    public function setGenere($genere)
    {
      $this->genere = $genere;

      return $this;
    }
  }
