import path from "node:path";
import { Router, Request, Response } from "express";
import { createMyStreamFile } from "../../utils";
import { MEDIA_PATH } from "../../config";
import Media_anime from "../../models/Media_anime";
import Media_opening from "../../models/Media_openings";
import Media_episode from "../../models/Media_episodes";
import Media_ending from "../../models/Media_endings";
const router = Router();
router.get("/:type/:id?", async (req: Request, res: Response) => {
  try {
    let pathFile: string = "CY/openings/02.webm";
    if(typeof req.params.id !== "undefined"){
      let {id, type} = req.params;
      switch (type) {
        case 'banner':
        case 'portada':
          let m = new Media_anime();
          m.setId(parseInt(id));
          pathFile = await m.obtenrUnAnime(pathFile);
          break;
        case 'openings':
          let o = new Media_opening();
          o.setId(parseInt(id));
          pathFile = await o.obtenrUnAnime(pathFile);
          break;
        case 'endings':
          let ed = new Media_ending();
          ed.setId(parseInt(id));
          pathFile = await ed.obtenrUnAnime(pathFile);
          break;
        case 'episodes':
          let e = new Media_episode();
          e.setId(parseInt(id));
          pathFile = await e.obtenrUnAnime(pathFile);
          break;
        default:
          break;
      }
      //path.sep +
    }
    const PATH_TO_FILES = "/../../" + MEDIA_PATH + path.sep+pathFile;
    await createMyStreamFile(path.join(__dirname, PATH_TO_FILES), res);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});
export default router;