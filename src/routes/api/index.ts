import { Router } from "express";
import langs from "./langs";
import animes from "./animes";
// import episodes from "./episodes";
import generes from "./generes";
const router = Router();
router.use("/langs", langs);
router.use("/animes", animes);
router.use('/generes', generes)
// router.use("/episodes", episodes);
export default router;
