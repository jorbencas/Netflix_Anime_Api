import { Router } from "express";
const router = Router();
import { getSasion, insert } from "../../controllers/seasions";
router.get("/:id", getSasion).put('/',insert);
export default router;