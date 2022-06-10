"use strict";
class Collection {
    __construct() {
    }
    /**
     * Get the value of profile
     */
    getProfile() {
        return this.profile;
    }
    /**
     * Set the value of profile
     *
     * @return  self
     */
    setProfile($profile) {
        this.profile = profile;
        return this;
    }
    /**
     * Get the value of name
     */
    getName() {
        return this.name;
    }
    /**
     * Set the value of name
     *
     * @return  self
     */
    setName($name) {
        this.name = name;
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
