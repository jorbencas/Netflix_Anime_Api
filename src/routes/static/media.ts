import path from "node:path";
import { Router, Request, Response, NextFunction } from "express";
import { createMyStreamFile } from "../../utils";
import { MEDIA_PATH } from "../../config";
import Media_anime from "../../models/Media_anime";

const router = Router();

router.get("/typw/:id", (req: Request, res: Response, next: NextFunction) => {
  let pathFile = "CY/openings/02.webm";
  let {id, type} = req.params;
  if(typeof id === "undefined"){
    switch (type) {
      case 'banner':
      case 'portada':
        let m = new Media_anime();
        pathFile = m.obtenrUnAnime(pathFile);
        break;
    
      default:
        let m = new Media_episodes();
        pathFile = m.obtenrUnAnime(pathFile);
        break;
    }
    
    //path.sep +
  }
  const PATH_TO_FILES = "/../../" + MEDIA_PATH;

  let fileName = path.join(__dirname, PATH_TO_FILES + pathFile);
  createMyStreamFile(fileName, res, next);
  
});
export default router;