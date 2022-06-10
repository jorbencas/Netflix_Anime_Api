"use strict";
class Lang {
    __construct() {
    }
    /**
     * Get the value of code
     */
    getCode() {
        return this.code;
    }
    /**
     * Set the value of code
     *
     * @return  self
     */
    setCode($code) {
        this.code = code;
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
