import path from "node:path";
import { createReadStream } from "node:fs";
import { Router, Request, Response, NextFunction } from "express";
import { isAccesible } from "../../utils";

const router = Router();

router.get("/:anime?/:episode?", async (req: Request, res: Response, next: NextFunction) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let anime = req.params.anime ?? "CY";
  let kind = typeof req.params.anime === 'undefined' ? 'openings' : 'banner';
  let episode = typeof req.params.episode === 'undefined' ? "02.webm" : req.params.episode;
  const PATH_TO_FILES = "/../../" + process.env.MEDIA_PATH;
  let fileName = path.join(
    __dirname,
     PATH_TO_FILES + path.sep + anime + path.sep + kind + path.sep + episode,
  );
  let content = await isAccesible(fileName);
  if (content) {
    createReadStream(fileName).pipe(res);
  } else {
    next(new Error("File not found"));
  }
});
export default router;