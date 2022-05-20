 <?php
  class History extends Database
  {
    private $id;
    private $episode;
    private $profile;
    private $time;

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
     * Get the value of profile
     */
    public function getProfile()
    {
      return $this->profile;
    }

    /**
     * Set the value of profile
     *
     * @return  self
     */
    public function setProfile($profile)
    {
      $this->profile = $profile;

      return $this;
    }

    /**
     * Get the value of time
     */
    public function getTime()
    {
      return $this->time;
    }

    /**
     * Set the value of time
     *
     * @return  self
     */
    public function setTime($time)
    {
      $this->time = $time;

      return $this;
    }
  }
