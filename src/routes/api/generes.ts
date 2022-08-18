import { Router } from "express";
import { getDefualtGeneres,insert, deleteAll } from "@controllers/generes";
var router = Router();
router.get("/", getDefualtGeneres).put("/", insert).delete("/", deleteAll);
export default router;