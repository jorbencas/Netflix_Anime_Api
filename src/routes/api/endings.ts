import { Router } from "express";
import { getOne,
  getbyAnime,
  getListIds,
  edit,
  insert,
  deleteOne,
  deletebyanime } from "../../controllers/endings";
var router = Router();
router.get("/getListIds/:lang/:siglas", getListIds);
router.route("/:lang/:siglas").get(getbyAnime).delete(deletebyanime);
router.route("/:lang/:id").get(getOne).post(edit).put(insert).delete(deleteOne);
export default router;