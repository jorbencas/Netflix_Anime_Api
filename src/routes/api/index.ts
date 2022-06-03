import { Router } from "express";
import langs from "./langs";
import animes from "./animes";
// import episodes from "./episodes";
const router = Router();
router.use("/langs", langs);
router.use("/animes", animes);
// router.use("/episodes", episodes);
export default router;
