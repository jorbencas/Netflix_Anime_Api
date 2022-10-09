import { Router } from "express";
import { getFilters, insert, deleteAll, update } from "../../controllers/Filters";
const router = Router();
router.get("/:kind", getFilters).post('/', update).put("/", insert).delete("/", deleteAll);
export default router;