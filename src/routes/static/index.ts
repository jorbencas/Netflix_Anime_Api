import path from "node:path";
import { createReadStream } from "node:fs";
import { Router, static as staticFiles, Request, Response, NextFunction } from "express";
import banner from "./banner";
import episodes from "./episodes";
import endings from "./endings";
import openings from "./openings";
import portada from "./portada";
import { isAccesible } from "../../utils";
const router = Router();
router.use("/banner", banner);
router.use("/endings", endings);
router.use("/episodes", episodes);
router.use("/openings", openings);
router.use("/portada", portada);
router.use("/chat", staticFiles(path.join(__dirname, "../../static/chat.html")));
router.get("/chat-leat", async (_req: Request, res: Response, next: NextFunction) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let fileName = path.join(
    __dirname,
    "../../static/notifications/notification.mp3"
  );
  let content = await isAccesible(fileName);
  if (content) {
    createReadStream(fileName).pipe(res);
  } else {
    next(new Error("File not found"));
  }
});
router.get(
  "/notify-send",
  async (_req: Request, res: Response, next: NextFunction) => {
    res.writeHead(200, { "content-type": "video/mp3" });
    let fileName = path.join(__dirname, "../../static/notifications/send.mp3");
    let content = await isAccesible(fileName);
    if (content) {
      createReadStream(fileName).pipe(res);
    } else {
      next(new Error("File not found"));
    }
  }
);
router.get("/notify", async (_req: Request, res: Response, next: NextFunction) => {
  res.writeHead(200, { "content-type": "audio/mp3" });
  let fileName = path.join(__dirname, "../../static/notifications/recibe.mp3");
    let content = await isAccesible(fileName);
  if (content) {
    createReadStream(fileName).pipe(res);
  } else {
    next(new Error("File not found"));
  }
});
export default router;