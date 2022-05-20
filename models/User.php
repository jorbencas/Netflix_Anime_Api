 <?php
  class User extends Database
  {
    private $username;
    private $nombre;
    private $apellidos;
    private $email;
    private $password;
    private $date_birthday;
    private $tipo;
    private $dni;
    private $acess_token;
    private $admin_token;
    private $activado;
    private $genere;

    /**
     * Get the value of password
     */
    public function getPassword()
    {
      return $this->password;
    }

    /**
     * Set the value of password
     *
     * @return  self
     */
    public function setPassword($password)
    {
      $this->password = $password;

      return $this;
    }

    /**
     * Get the value of activado
     */
    public function getActivado()
    {
      return $this->activado;
    }

    /**
     * Set the value of activado
     *
     * @return  self
     */
    public function setActivado($activado)
    {
      $this->activado = $activado;

      return $this;
    }

    /**
     * Get the value of acess_token
     */
    public function getAcess_token()
    {
      return $this->acess_token;
    }

    /**
     * Set the value of acess_token
     *
     * @return  self
     */
    public function setAcess_token($acess_token)
    {
      $this->acess_token = $acess_token;

      return $this;
    }

    /**
     * Get the value of email
     */
    public function getEmail()
    {
      return $this->email;
    }

    /**
     * Set the value of email
     *
     * @return  self
     */
    public function setEmail($email)
    {
      $this->email = $email;

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
     * Get the value of apellidos
     */
    public function getApellidos()
    {
      return $this->apellidos;
    }

    /**
     * Set the value of apellidos
     *
     * @return  self
     */
    public function setApellidos($apellidos)
    {
      $this->apellidos = $apellidos;

      return $this;
    }

    /**
     * Get the value of tipo
     */
    public function getTipo()
    {
      return $this->tipo;
    }

    /**
     * Set the value of tipo
     *
     * @return  self
     */
    public function setTipo($tipo)
    {
      $this->tipo = $tipo;

      return $this;
    }

    /**
     * Get the value of dni
     */
    public function getDni()
    {
      return $this->dni;
    }

    /**
     * Set the value of dni
     *
     * @return  self
     */
    public function setDni($dni)
    {
      $this->dni = $dni;

      return $this;
    }

    /**
     * Get the value of date_birthday
     */
    public function getDate_birthday()
    {
      return $this->date_birthday;
    }

    /**
     * Set the value of date_birthday
     *
     * @return  self
     */
    public function setDate_birthday($date_birthday)
    {
      $this->date_birthday = $date_birthday;

      return $this;
    }

    /**
     * Get the value of genere
     */
    public function getGenere()
    {
      return $this->genere;
    }

    /**
     * Set the value of genere
     *
     * @return  self
     */
    public function setGenere($genere)
    {
      $this->genere = $genere;

      return $this;
    }

    /**
     * Get the value of admin_token
     */
    public function getAdmin_token()
    {
      return $this->admin_token;
    }

    /**
     * Set the value of admin_token
     *
     * @return  self
     */
    public function setAdmin_token($admin_token)
    {
      $this->admin_token = $admin_token;

      return $this;
    }
  }
