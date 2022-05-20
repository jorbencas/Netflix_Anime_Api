 <?php
  class Anime_avaible_notifications extends Database
  {
    private $id;
    private $avaible;
    private $anime;

    public function __construct($anime)
    {
      parent::__construct();
      $this->avaible = false;
      $this->anime = $anime;
    }

    /**
     * Get the value of id
     */
    public function getId()
    {
      return $this->id;
    }

    /**
     * Get the value of avaible
     */
    public function getAvaible()
    {
      return $this->avaible;
    }

    /**
     * Set the value of avaible
     *
     * @return  self
     */
    public function setAvaible($avaible)
    {
      $this->avaible = $avaible;

      return $this;
    }

    /**
     * Get the value of anime
     */
    public function getAnime()
    {
      return $this->anime;
    }
  }
