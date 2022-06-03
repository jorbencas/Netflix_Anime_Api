import { Router } from "express";
const router = Router();
import { getTittle, getCode } from "../../controllers/langs";
router.get("/:lang", getTittle);
router.get("/", getCode);
export default router;