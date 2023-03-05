import path from "node:path";
import {
  Router,
  static as staticFiles,
} from "express";
const router = Router();
router.get("/", staticFiles(path.join(__dirname, "../../static/file.html")));
export default router;