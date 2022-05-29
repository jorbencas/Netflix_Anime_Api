import { Router } from "express";
import { addFavorite, getfav, getlistanime, getnumanimes, getone, getslides, lastanimes, removeFavorite } from "../../controllers/animes";
var router = Router();
router.get("/", getlistanime);
router.get("/:first/:last", getslides);
router.get("/:siglas", getone);
router.get("/:num", getnumanimes);
router.get("/lastanimes/:siglas", lastanimes);
router.route("favorites/")
.get(getfav)
.post(addFavorite)
.delete(removeFavorite);
export default router;