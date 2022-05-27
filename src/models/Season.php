 <?php
  class Season extends Database
  {
    private $id;
    private $title;

    public function __construct()
    {
      parent::__construct();
    }


    /**
     * Get the value of title
     */
    public function getTitle()
    {
      return $this->title;
    }

    /**
     * Set the value of title
     *
     * @return  self
     */
    public function setTitle($title)
    {
      $this->title = $title;

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
