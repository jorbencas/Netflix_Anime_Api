import path from "node:path";
import { access, createReadStream, existsSync } from "node:fs";
import express, { Request, Response, NextFunction } from "express";
import banner from "./banner";
import episodes from "./episodes";
import endings from "./endings";
import openings from "./openings";
import portada from "./portada";
var router = express.Router();
router.use("/banner", banner);
router.use("/endings", endings);
router.use("/episodes", episodes);
router.use("/openings", openings);
router.use("/portada", portada);
router.get("/chat", express.static(path.join(__dirname, "../../static/chat.html")));
router.get("/chat-leat", (_req: Request, res: Response, next: NextFunction) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let fileName = path.join(
    __dirname,
    "../../static/notifications/notification.mp3"
  );
  if (existsSync(fileName)) {
      access(fileName, 7, (err) => {
    if (!err) createReadStream(fileName).pipe(res);
    else next(new Error("File not found"));
  });
  } else {
    next(new Error("File not found"));
  }
});
router.get(
  "/notify-send",
  (_req: Request, res: Response, next: NextFunction) => {
    res.writeHead(200, { "content-type": "video/mp3" });
    let fileName = path.join(__dirname, "../../static/notifications/send.mp3");
    if (existsSync(fileName)) {
      access(fileName, 7, (err) => {
    if (!err) createReadStream(fileName).pipe(res);
    else next(new Error("File not found"));
  });
  } else {
    next(new Error("File not found"));
  }
  }
);
router.get("/notify", (_req: Request, res: Response, next: NextFunction) => {
  res.writeHead(200, { "content-type": "audio/mp3" });
  let fileName = path.join(__dirname, "../../static/notifications/recibe.mp3");
  if (existsSync(fileName)) {
      access(fileName, 7, (err) => {
    if (!err) createReadStream(fileName).pipe(res);
    else next(new Error("File not found"));
  });
  } else {
    next(new Error("File not found"));
  }
});
export default router;