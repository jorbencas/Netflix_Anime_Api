import { Router } from "express";
import { getOne,
  getbyAnime,
  getListIds,
  getidrand,
  insert, edit,
  deleteOne,
  deletebyanime } from "../../controllers/episodes";
var router = Router();
router.get("/:lang/", getidrand);
router.get("/getListIds/:lang/:siglas", getListIds);
router.route("/:lang/:siglas").get(getbyAnime).delete(deleteOne);
router.route("/:lang/:id").get(getOne).post(edit).put(insert).delete(deletebyanime);
export default router;