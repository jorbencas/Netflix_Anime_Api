import path from "node:path";
import { Router, Request, Response, NextFunction } from "express";
import { createMyStreamFile } from "../../utils";
import { MEDIA_PATH } from "../../config";

const router = Router();

router.get("/:anime?/:episode?/:season?", (req: Request, res: Response, next: NextFunction) => {
  let anime = req.params.anime ?? "CY";
  let kind = typeof req.params.anime === 'undefined' ? 'openings' : 'episodes';
  let episode = typeof req.params.episode === 'undefined' ? "02.webm" : req.params.episode;
  const PATH_TO_FILES = "/../../" + MEDIA_PATH;
  let pathFile = path.sep + anime + path.sep + kind;
  if (typeof req.params.season !== 'undefined') {
      pathFile += path.sep + req.params.season;
  }
  pathFile += + path.sep + episode;
  let fileName = path.join(__dirname, PATH_TO_FILES + pathFile);
  createMyStreamFile(fileName, res, next);
});
export default router;