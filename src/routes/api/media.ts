import { Router } from "express";
import { defaultSiglas, insertMedia } from "../../controllers/media";
var router = Router();
router.route("/").get(defaultSiglas).post(insertMedia);
export default router;