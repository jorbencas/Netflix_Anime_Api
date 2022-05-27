 <?php
  class Comment extends Database
  {
    private $id;
    private $comment;
    private $fecha;
    private $hora;
    private $username;
    private $kind;
    private $id_external;
    private $response_comment;

    public function __construct()
    {
      parent::__construct();
    }

    /**
     * Get the value of id_external
     */
    public function getId_external()
    {
      return $this->id_external;
    }

    /**
     * Set the value of id_external
     *
     * @return  self
     */
    public function setId_external($id_external)
    {
      $this->id_external = $id_external;

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

    /**
     * Get the value of comment
     */
    public function getComment()
    {
      return $this->comment;
    }

    /**
     * Set the value of comment
     *
     * @return  self
     */
    public function setComment($comment)
    {
      $this->comment = $comment;

      return $this;
    }

    /**
     * Get the value of hora
     */
    public function getHora()
    {
      return $this->hora;
    }

    /**
     * Set the value of hora
     *
     * @return  self
     */
    public function setHora($hora)
    {
      $this->hora = $hora;

      return $this;
    }

    /**
     * Get the value of fecha
     */
    public function getFecha()
    {
      return $this->fecha;
    }

    /**
     * Set the value of fecha
     *
     * @return  self
     */
    public function setFecha($fecha)
    {
      $this->fecha = $fecha;

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
     * Get the value of response_comment
     */
    public function getResponse_comment()
    {
      return $this->response_comment;
    }

    /**
     * Set the value of response_comment
     *
     * @return  self
     */
    public function setResponse_comment($response_comment)
    {
      $this->response_comment = $response_comment;

      return $this;
    }
  }
