import path from "node:path";
import {access, createReadStream, existsSync } from "node:fs";
import express, { Request, Response, NextFunction } from "express";
var router = express.Router();
router.get("/:anime?/:opening?", (req: Request, res: Response, next: NextFunction) => {
  res.writeHead(200, { "content-type": "video/mp4" });
let anime = typeof req.params.opening === undefined ? "CY" : req.params.anime;
let kind = "openings";
let opening = typeof req.params.opening === undefined ? "02.webm" : req.params.opening;
  const PATH_TO_FILES = "/../../" + process.env.MEDIA_PATH;
  let fileName = path.join(
    __dirname,
     PATH_TO_FILES + path.sep + anime + path.sep + kind + path.sep + opening,
  );

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