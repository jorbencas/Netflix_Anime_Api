import path from "node:path";
import fs from "node:fs";
import express, { Request, Response, NextFunction } from "express";
var router = express.Router();
router.get("/animes", (req: Request, res: Response, next: NextFunction) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let fileName = path.join(
    __dirname,
    "/../../" + process.env.MEDIA_PATH + "/CY/openings/02.webm"
  );
  fs.access(fileName, 7, (err) => {
    if (!err) fs.createReadStream(fileName).pipe(res);
    else next(err);
  });
});
router.get("/banner", (req: Request, res: Response, next: NextFunction) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let fileName = path.join(
    __dirname,
    process.env.MEDIA_PATH + "/CY/openings/01.mp4"
  );
  fs.access(fileName, 7, (err) => {
    if (!err) fs.createReadStream(fileName).pipe(res);
    else next(err);
  });
});
router.get("/endings", (req: Request, res: Response, next: NextFunction) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let fileName = path.join(
    __dirname,
    process.env.MEDIA_PATH + "/CY/openings/01.mp4"
  );
  fs.access(fileName, 7, (err) => {
    if (!err) fs.createReadStream(fileName).pipe(res);
    else next(err);
  });
});
router.get("/episodes", (req: Request, res: Response, next: NextFunction) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let fileName = path.join(
    __dirname,
    process.env.MEDIA_PATH + "/CY/openings/01.mp4"
  );
  fs.access(fileName, 7, (err) => {
    if (!err) fs.createReadStream(fileName).pipe(res);
    else next(err);
  });
});
router.get("/openings", (req: Request, res: Response, next: NextFunction) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let fileName = path.join(
    __dirname,
    process.env.MEDIA_PATH + "/CY/openings/01.mp4"
  );
  fs.access(fileName, 7, (err) => {
    if (!err) fs.createReadStream(fileName).pipe(res);
    else next(err);
  });
});
router.get("/portada", (req: Request, res: Response, next: NextFunction) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let fileName = path.join(
    __dirname,
    process.env.MEDIA_PATH + "/CY/openings/01.mp4"
  );
  fs.access(fileName, 7, (err) => {
    if (!err) fs.createReadStream(fileName).pipe(res);
    else next(err);
  });
});
router.use(
  "/chat",
  express.static(path.join(__dirname, "../../static/chat.html"))
);

router.get("/chat-leat", (req: Request, res: Response, next: NextFunction) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let fileName = path.join(
    __dirname,
    "../../static/notifications/notification.mp3"
  );
  fs.access(fileName, 7, (err) => {
    if (!err) fs.createReadStream(fileName).pipe(res);
    else next(err);
  });
});
router.get(
  "/notify-send",
  (req: Request, res: Response, next: NextFunction) => {
    res.writeHead(200, { "content-type": "video/mp4" });
    let fileName = path.join(__dirname, "../../static/notifications/send.mp3");
    fs.access(fileName, 7, (err) => {
      if (!err) fs.createReadStream(fileName).pipe(res);
      else next(err);
    });
  }
);
router.get("/notify", (req: Request, res: Response, next: NextFunction) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let fileName = path.join(__dirname, "../../static/notifications/recibe.mp3");
  fs.access(fileName, 7, (err) => {
    if (!err) fs.createReadStream(fileName).pipe(res);
    else next(err);
  });
});
export default router;
