 <?php
  class Episode extends Database
  {
    private $id;
    private $anime;
    private $num;
    private $seasion;
    private $madia_type;
    private $madia_name;
    private $madia_extension;

    public function __construct()
    {
      parent::__construct();
    }


    /**
     * Get the value of seasion
     */
    public function getSeasion()
    {
      return $this->seasion;
    }

    /**
     * Set the value of seasion
     *
     * @return  self
     */
    public function setSeasion($seasion)
    {
      $this->seasion = $seasion;

      return $this;
    }

    /**
     * Get the value of madia_name
     */
    public function getMadia_name()
    {
      return $this->madia_name;
    }

    /**
     * Set the value of madia_name
     *
     * @return  self
     */
    public function setMadia_name($madia_name)
    {
      $this->madia_name = $madia_name;

      return $this;
    }

    /**
     * Get the value of madia_type
     */
    public function getMadia_type()
    {
      return $this->madia_type;
    }

    /**
     * Set the value of madia_type
     *
     * @return  self
     */
    public function setMadia_type($madia_type)
    {
      $this->madia_type = $madia_type;

      return $this;
    }

    /**
     * Get the value of madia_extension
     */
    public function getMadia_extension()
    {
      return $this->madia_extension;
    }

    /**
     * Set the value of madia_extension
     *
     * @return  self
     */
    public function setMadia_extension($madia_extension)
    {
      $this->madia_extension = $madia_extension;

      return $this;
    }

    /**
     * Get the value of num
     */
    public function getNum()
    {
      return $this->num;
    }

    /**
     * Set the value of num
     *
     * @return  self
     */
    public function setNum($num)
    {
      $this->num = $num;

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
