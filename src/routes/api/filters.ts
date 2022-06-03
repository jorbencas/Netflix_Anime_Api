import { Router } from "express";
import { getFilters } from "../../controllers/Filters";
const router = Router();
router.get("/:lang/:kind", getFilters);
export default router;