import { Router } from "express";
import { getlist, 
    getNum, 
    getOne, 
    getslides, 
    last,
    lastByGenere,
    removeFavorite,
    addFavorite,
    getFavorite, editinsert } from "../../controllers/animes";
var router = Router();
router.route("/").get(getlist).post(editinsert)
router.get("/lastByGenere", lastByGenere)
router.get("/:first/:last", getslides)
router.get("/:siglas/:edit?",getOne)
router.get("/:num", getNum)
router.get("/lastanimes/:siglas", last)
router.route("/favorites").get(getFavorite).post(addFavorite).delete(removeFavorite);
export default router;