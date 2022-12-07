import path from "node:path";
import { Router, Request, Response, NextFunction } from "express";
import { createMyStreamFile } from "../../utils";
import { MEDIA_PATH } from "../../config";

const router = Router();

router.get("/:anime?/:opening?", (req: Request, res: Response, next: NextFunction) => {
  let anime = req.params.anime ?? "CY";
  let kind = "openings";
  let opening = req.params.opening ?? "02.webm";
  const PATH_TO_FILES = "/../../" + MEDIA_PATH;
  let fileName = path.join(
    __dirname,
     PATH_TO_FILES + path.sep + anime + path.sep + kind + path.sep + opening,
  );
  createMyStreamFile(fileName, res, next);
});
export default router;