import { Router } from "express";
import { getOne,
  getbyAnime,
  getLastepisodes,
  getidrand,
  inserteditOneepisode,
  deleteOneepisode,
  deleteEpisodesbyanime } from "../../controllers/episodes";
var router = Router();
router.get("/", getidrand);
router.route("/:siglas")
.get(getbyAnime)
.delete(deleteOneepisode);
router.route("/:id")
.get(getOne)
.post(inserteditOneepisode)
.delete(deleteEpisodesbyanime);
router.get("/:num", getLastepisodes);
export default router;