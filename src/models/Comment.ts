
  class Comment 
  {
    private id;
    private comment;
    private fecha;
    private hora;
    private username;
    private kind;
    private id_external;
    private response_comment;

    public __construct()
    {
      
    }

    /**
     * Get the value of id_external
     */
    public getId_external()
    {
      return this.id_external;
    }

    /**
     * Set the value of id_external
     *
     * @return  self
     */
    public setId_external($id_external)
    {
      this.id_external = id_external;

      return this;
    }

    /**
     * Get the value of kind
     */
    public getKind()
    {
      return this.kind;
    }

    /**
     * Set the value of kind
     *
     * @return  self
     */
    public setKind($kind)
    {
      this.kind = kind;

      return this;
    }

    /**
     * Get the value of id
     */
    public getId()
    {
      return this.id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */
    public setId($id)
    {
      this.id = id;

      return this;
    }

    /**
     * Get the value of comment
     */
    public getComment()
    {
      return this.comment;
    }

    /**
     * Set the value of comment
     *
     * @return  self
     */
    public setComment($comment)
    {
      this.comment = comment;

      return this;
    }

    /**
     * Get the value of hora
     */
    public getHora()
    {
      return this.hora;
    }

    /**
     * Set the value of hora
     *
     * @return  self
     */
    public setHora($hora)
    {
      this.hora = hora;

      return this;
    }

    /**
     * Get the value of fecha
     */
    public getFecha()
    {
      return this.fecha;
    }

    /**
     * Set the value of fecha
     *
     * @return  self
     */
    public setFecha($fecha)
    {
      this.fecha = fecha;

      return this;
    }

    /**
     * Get the value of username
     */
    public getUsername()
    {
      return this.username;
    }

    /**
     * Set the value of username
     *
     * @return  self
     */
    public setUsername($username)
    {
      this.username = username;

      return this;
    }

    /**
     * Get the value of response_comment
     */
    public getResponse_comment()
    {
      return this.response_comment;
    }

    /**
     * Set the value of response_comment
     *
     * @return  self
     */
    public setResponse_comment($response_comment)
    {
      this.response_comment = response_comment;

      return this;
    }
  }
