import { Router } from "express";
import { getlist, 
    getNum, 
    getOne, 
    getslides, 
    last,
    lastByGenere,
    removeFavorite,
    addFavorite,
    getFavorite, insert } from "../../controllers/animes";
var router = Router();
router.get("/:lang/", getlist).post("/:lang/", insert)
router.get("/lastByGenere/:lang/", lastByGenere)
router.get("/:lang/:first/:last", getslides)
router.get("/:lang/:siglas", getOne)
router.get("/:lang/:num", getNum)
router.get("/lastanimes/:lang/:siglas", last)
router.get("/favorites/", getFavorite).post("/favorites/", addFavorite).delete("/favorites/", removeFavorite);
export default router;