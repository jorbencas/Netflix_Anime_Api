
  class Metadata 
  {
    private id;
    private visiteds;
    private num_users;

    public __construct()
    {
      
    }


    /**
     * Get the value of num_users
     */
    public getNum_users()
    {
      return this.num_users;
    }

    /**
     * Set the value of num_users
     *
     * @return  self
     */
    public setNum_users($num_users)
    {
      this.num_users = num_users;

      return this;
    }

    /**
     * Get the value of visiteds
     */
    public getVisiteds()
    {
      return this.visiteds;
    }

    /**
     * Set the value of visiteds
     *
     * @return  self
     */
    public setVisiteds($visiteds)
    {
      this.visiteds = visiteds;

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
  }
