import { Router } from "express";
const router = Router();
import { getSasion, getListIds } from "../../controllers/seasions";
router.get("/:id", getSasion);
router.get("/getListIds/:lang/:siglas", getListIds);
export default router;