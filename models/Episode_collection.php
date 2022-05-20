 <?php
  class Episode_collection extends Database
  {
    private $id;
    private $episode;
    private $collection;

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
     * Get the value of episode
     */
    public function getEpisode()
    {
      return $this->episode;
    }

    /**
     * Set the value of episode
     *
     * @return  self
     */
    public function setEpisode($episode)
    {
      $this->episode = $episode;

      return $this;
    }

    /**
     * Get the value of collection
     */
    public function getCollection()
    {
      return $this->collection;
    }

    /**
     * Set the value of collection
     *
     * @return  self
     */
    public function setCollection($collection)
    {
      $this->collection = $collection;

      return $this;
    }
  }
