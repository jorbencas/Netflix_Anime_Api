"use strict";
class Notification {
    __construct() {
    }
    /**
     * Get the value of config
     */
    getConfig() {
        return this.config;
    }
    /**
     * Set the value of config
     *
     * @return  self
     */
    setConfig($config) {
        this.config = config;
        return this;
    }
    /**
     * Get the value of avaible
     */
    getAvaible() {
        return this.avaible;
    }
    /**
     * Set the value of avaible
     *
     * @return  self
     */
    setAvaible($avaible) {
        this.avaible = avaible;
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
