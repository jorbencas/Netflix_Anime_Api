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
router
.get("/:siglas", getbyAnime)
.delete("/:siglas", deleteOneepisode);
router
.get("/:id", getOne)
.post("/:id", inserteditOneepisode)
.delete("/:id", deleteEpisodesbyanime);
router.get("/:num", getLastepisodes);
export default router;