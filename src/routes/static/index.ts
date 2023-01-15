import { Router } from "express";
import media from "./media";
import chat from "./chat";
const router = Router();
router.use("/media", media);
router.use("/chat", chat);
export default router;