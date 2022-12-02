import path from "node:path";
import { createReadStream } from "node:fs";
import { Router, Request, Response, NextFunction } from "express";
import { isAccesible } from "../../utils";

const router = Router();

router.get("/:anime?/:episode?/:season?", async (req: Request, res: Response, next: NextFunction) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let anime = req.params.anime ?? "CY";
  let kind = typeof req.params.anime === 'undefined' ? 'openings' : 'episodes';
  let episode = typeof req.params.episode === 'undefined' ? "02.webm" : req.params.episode;
  const PATH_TO_FILES = "/../../" + process.env.MEDIA_PATH;
  let pathFile = path.sep + anime + path.sep + kind;
  if (typeof req.params.season !== 'undefined') {
      pathFile += path.sep + req.params.season;
  }
  pathFile += + path.sep + episode;
  let fileName = path.join(__dirname, PATH_TO_FILES + pathFile);
  let content = await isAccesible(fileName);
  if (content) {
    createReadStream(fileName).pipe(res);
  } else {
    next(new Error("File not found"));
  }
});
export default router;