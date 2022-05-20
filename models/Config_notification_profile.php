 <?php
  class Config_notification_profile extends Database
  {
    private $id;
    private $kind;
    private $profile;
    private $sound;

    public function __construct()
    {
      parent::__construct();
    }


    /**
     * Get the value of sound
     */
    public function getSound()
    {
      return $this->sound;
    }

    /**
     * Set the value of sound
     *
     * @return  self
     */
    public function setSound($sound)
    {
      $this->sound = $sound;

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
