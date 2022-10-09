import { Router } from "express";
import { defaultSiglas } from "../../controllers/media";
var router = Router();
router.get("/", defaultSiglas);
export default router;