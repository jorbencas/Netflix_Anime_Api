import { Router } from "express";
import { getFilters, getTemporadas, getDefualtGeneres, insert, deleteAll } from "../../controllers/Filters";
const router = Router();
router.get("/:lang/:kind", getFilters);
router.get('/temporadas',getTemporadas)
router.get("/genees", getDefualtGeneres).put("/", insert).delete("/", deleteAll);

export default router;