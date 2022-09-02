import { Router } from "express";
import { defaultSiglas, insert } from "../../controllers/media";
var router = Router();
router.get("/", defaultSiglas).put('/', insert);
export default router;