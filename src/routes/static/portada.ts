import path from "node:path";
import {access, createReadStream } from "node:fs";
import express, { Request, Response, NextFunction } from "express";
var router = express.Router();
router.get("/:anime/:episode", (req: Request, res: Response, next: NextFunction) => {
  res.writeHead(200, { "content-type": "video/mp4" });
let anime = typeof req.params.anime === 'undefined' ? "CY" : req.params.anime;
let kind = "portada";
let episode = typeof req.params.episode === 'undefined' ? "02.webm" : req.params.episode;
  const PATH_TO_FILES = "/../../" + process.env.MEDIA_PATH;
  let fileName = path.join(
    __dirname,
     PATH_TO_FILES + path.sep + anime + path.sep + kind + path.sep + episode,
  );
  access(fileName, 7, (err) => {
    if (!err) createReadStream(fileName).pipe(res);
    else next(err);
  });
});
export default router;