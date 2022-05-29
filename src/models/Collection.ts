 <?php
  class Collection extends Database
  {
    private $id;
    private $name;
    private $profile;

    public function __construct()
    {
      parent::__construct();
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
     * Get the value of name
     */
    public function getName()
    {
      return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */
    public function setName($name)
    {
      $this->name = $name;

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
