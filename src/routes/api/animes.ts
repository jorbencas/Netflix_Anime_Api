import { Router } from "express";
import { getlist, 
    getNum, 
    getOne, 
    getslides, 
    last,
    lastByGenere,
    removeFavorite,
    addFavorite,
    getFavorite, insert, edit } from "../../controllers/animes";
var router = Router();
router.get("/", getlist)
router.get("/lastByGenere", lastByGenere)
router.get("/:first/:last", getslides)
router.route("/:siglas").get(getOne).post(edit).put(insert)
router.get("/:num", getNum)
router.get("/lastanimes/:siglas", last)
router.get("/favorites", getFavorite).post("/favorites", addFavorite).delete("/favorites", removeFavorite);
export default router;