"use strict";
class Season {
    __construct() {
    }
    /**
     * Get the value of title
     */
    getTitle() {
        return this.title;
    }
    /**
     * Set the value of title
     *
     * @return  self
     */
    setTitle($title) {
        this.title = title;
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
