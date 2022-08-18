import { Router } from "express";
import { getlist, 
    getNum, 
    getOne, 
    getslides, 
    last,
    lastByGenere,
    removeFavorite,
    addFavorite,
    getFavorite } from "@controllers/animes";
var router = Router();
router.get("/:lang/", getlist);
router.get("/lastByGenere/:lang/", lastByGenere);
router.get("/:lang/:first/:last", getslides);
router.get("/:lang/:siglas", getOne);
router.get("/:lang/:num", getNum);
router.get("/lastanimes/:lang/:siglas", last);
router.route("favorites/").get(getFavorite).post(addFavorite).delete(removeFavorite);
export default router;