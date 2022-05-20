 <?php
  class Media_anime extends Database
  {
    private $id;
    private $type;
    private $name;
    private $extension;
    private $anime;

    public function __construct()
    {
      parent::__construct();
    }


    /**
     * Get the value of extension
     */
    public function getExtension()
    {
      return $this->extension;
    }

    /**
     * Set the value of extension
     *
     * @return  self
     */
    public function setExtension($extension)
    {
      $this->extension = $extension;

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
     * Get the value of type
     */
    public function getType()
    {
      return $this->type;
    }

    /**
     * Set the value of type
     *
     * @return  self
     */
    public function setType($type)
    {
      $this->type = $type;

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
  }
