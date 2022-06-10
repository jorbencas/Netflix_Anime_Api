"use strict";
class Anime {
    __construct() {
    }
    /**
     * Get the value of state
     */
    getState() {
        return this.state;
    }
    /**
     * Set the value of state
     *
     * @return  self
     */
    setState($state) {
        this.state = state;
        return this;
    }
    /**
     * Get the value of idiomas
     */
    getIdiomas() {
        return this.idiomas;
    }
    /**
     * Set the value of idiomas
     *
     * @return  self
     */
    setIdiomas($idiomas) {
        this.idiomas = idiomas;
        return this;
    }
    /**
     * Get the value of siglas
     */
    getSiglas() {
        return this.siglas;
    }
    setSiglas($siglas) {
        this.siglas = siglas;
        return this;
    }
    getDate_publication() {
        return this.date_publication;
    }
    setDate_publication($date_publication) {
        this.date_publication = date_publication;
        return this;
    }
    /**
     * Get the value of date_finalization
     */
    getDate_finalization() {
        return this.date_finalization;
    }
    /**
     * Set the value of date_finalization
     *
     * @return  self
     */
    setDate_finalization($date_finalization) {
        this.date_finalization = date_finalization;
        return this;
    }
    /**
     * Get the value of kind
     */
    getKind() {
        return this.kind;
    }
    /**
     * Set the value of kind
     *
     * @return  self
     */
    setKind($kind) {
        this.kind = kind;
        return this;
    }
    /**
     * Get the value of valorations
     */
    getValorations() {
        return this.valorations;
    }
    /**
     * Set the value of valorations
     *
     * @return  self
     */
    setValorations($valorations) {
        this.valorations = valorations;
        return this;
    }
    /**
     * Get the value of temporada
     */
    getTemporada() {
        return this.temporada;
    }
    /**
     * Set the value of temporada
     *
     * @return  self
     */
    setTemporada($temporada) {
        this.temporada = temporada;
        return this;
    }
}
