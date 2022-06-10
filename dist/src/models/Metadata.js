"use strict";
class Metadata {
    __construct() {
    }
    /**
     * Get the value of num_users
     */
    getNum_users() {
        return this.num_users;
    }
    /**
     * Set the value of num_users
     *
     * @return  self
     */
    setNum_users($num_users) {
        this.num_users = num_users;
        return this;
    }
    /**
     * Get the value of visiteds
     */
    getVisiteds() {
        return this.visiteds;
    }
    /**
     * Set the value of visiteds
     *
     * @return  self
     */
    setVisiteds($visiteds) {
        this.visiteds = visiteds;
        return this;
    }
    /**
     * Get the value of id
     */
    getId() {
        return this.id;
    }
    /**
     * Set the value of id
     *
     * @return  self
     */
    setId($id) {
        this.id = id;
        return this;
    }
}
