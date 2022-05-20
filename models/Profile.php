 <?php
  class Profile extends Database
  {
    private $id;
    private $nombre;
    private $username;

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
     * Get the value of nombre
     */
    public function getNombre()
    {
      return $this->nombre;
    }

    /**
     * Set the value of nombre
     *
     * @return  self
     */
    public function setNombre($nombre)
    {
      $this->nombre = $nombre;

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
  }
