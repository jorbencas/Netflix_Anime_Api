import { Router } from "express";
import { getFilters, getTemporadas } from "../../controllers/Filters";
const router = Router();
router.get("/:lang/:kind", getFilters);
router.get('/temporadas',getTemporadas)
export default router;