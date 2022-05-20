 <?php
  class Filter extends Database
  {
    private $id;
    private $code;
    private $kind;

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
     * Get the value of code
     */
    public function getCode()
    {
      return $this->code;
    }

    /**
     * Set the value of code
     *
     * @return  self
     */
    public function setCode($code)
    {
      $this->code = $code;

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
  }
