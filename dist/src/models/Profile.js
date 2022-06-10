"use strict";
class Profile {
    __construct() {
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
    /**
     * Get the value of nombre
     */
    getNombre() {
        return this.nombre;
    }
    /**
     * Set the value of nombre
     *
     * @return  self
     */
    setNombre($nombre) {
        this.nombre = nombre;
        return this;
    }
    /**
     * Get the value of username
     */
    getUsername() {
        return this.username;
    }
    /**
     * Set the value of username
     *
     * @return  self
     */
    setUsername($username) {
        this.username = username;
        return this;
    }
}
