 <?php
  class Metadata extends Database
  {
    private $id;
    private $visiteds;
    private $num_users;

    public function __construct()
    {
      parent::__construct();
    }


    /**
     * Get the value of num_users
     */
    public function getNum_users()
    {
      return $this->num_users;
    }

    /**
     * Set the value of num_users
     *
     * @return  self
     */
    public function setNum_users($num_users)
    {
      $this->num_users = $num_users;

      return $this;
    }

    /**
     * Get the value of visiteds
     */
    public function getVisiteds()
    {
      return $this->visiteds;
    }

    /**
     * Set the value of visiteds
     *
     * @return  self
     */
    public function setVisiteds($visiteds)
    {
      $this->visiteds = $visiteds;

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
