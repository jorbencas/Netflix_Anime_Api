 <?php
  class Notification extends Database
  {
    private $id;
    private $name;
    private $avaible;
    private $config;

    public function __construct()
    {
      parent::__construct();
    }

    /**
     * Get the value of config
     */
    public function getConfig()
    {
      return $this->config;
    }

    /**
     * Set the value of config
     *
     * @return  self
     */
    public function setConfig($config)
    {
      $this->config = $config;

      return $this;
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
