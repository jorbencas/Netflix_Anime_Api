import path from "node:path";
import {access, createReadStream, existsSync } from "node:fs";
import express, { Request, Response, NextFunction } from "express";
var router = express.Router();
router.get("/:anime?/:episode?/:season?", (req: Request, res: Response, next: NextFunction) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let anime = typeof req.params.anime === 'undefined' ? "CY" : req.params.anime;
  let kind = typeof req.params.anime === 'undefined' ? 'openings' : 'episodes';
  let episode = typeof req.params.episode === 'undefined' ? "02.webm" : req.params.episode;
  const PATH_TO_FILES = "/../../" + process.env.MEDIA_PATH;
  let pathFile = path.sep + anime + path.sep + kind + path.sep + episode;
  if (typeof req.params.season !== 'undefined') {
      pathFile = path.sep + anime + path.sep + kind + path.sep + req.params.season + path.sep + episode;
  }
  let fileName = path.join(__dirname, PATH_TO_FILES + pathFile);
  if (existsSync(fileName)) {
    access(fileName, 7, (err) => {
    if (!err) createReadStream(fileName).pipe(res);
    else next(err);
  });
  } else {
    next(new Error("File not found"));
  }
});
export default router;