 <?php
  class Config_user extends Database
  {
    private $id;
    private $username;
    private $limit_num_profiles;
    private $see_video_profiles_time;

    public function __construct()
    {
      parent::__construct();
    }


    /**
     * Get the value of see_video_profiles_time
     */
    public function getSee_video_profiles_time()
    {
      return $this->see_video_profiles_time;
    }

    /**
     * Set the value of see_video_profiles_time
     *
     * @return  self
     */
    public function setSee_video_profiles_time($see_video_profiles_time)
    {
      $this->see_video_profiles_time = $see_video_profiles_time;

      return $this;
    }

    /**
     * Get the value of limit_num_profiles
     */
    public function getLimit_num_profiles()
    {
      return $this->limit_num_profiles;
    }

    /**
     * Set the value of limit_num_profiles
     *
     * @return  self
     */
    public function setLimit_num_profiles($limit_num_profiles)
    {
      $this->limit_num_profiles = $limit_num_profiles;

      return $this;
    }

    /**
     * Get the value of username
     */
    public function getUsername()
    {
      return $this->username;
    }

    /**
     * Set the value of username
     *
     * @return  self
     */
    public function setUsername($username)
    {
      $this->username = $username;

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
