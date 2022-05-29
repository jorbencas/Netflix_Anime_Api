import { Router } from "express";
const router = Router();
import { getTittleLangs, getcodelangs } from "../../controllers/langs";
router.get("/:lang", getTittleLangs);
router.get("/", getcodelangs);
export default router;