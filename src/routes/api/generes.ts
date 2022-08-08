import { Router } from "express";
import { getDefualtGeneres } from "../../controllers/generes";
var router = Router();
router.get("/", getDefualtGeneres);
export default router;