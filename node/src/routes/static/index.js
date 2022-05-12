const path = require("path");
const fs = require("fs");
const express = require("express");
var router = express.Router();
router.get("/animes", (req, res, next) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let fileName = path.join(
    __dirname,
    process.env.MEDIA_PATH + "/CY/openings/01.mp4"
  );
  fs.access(fileName, "r", (err) => {
    if (!err) fs.createReadStream(fileName).pipe(res);
    else next(err);
  });
});
router.get("/banner", (req, res, next) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let fileName = path.join(
    __dirname,
    process.env.MEDIA_PATH + "/CY/openings/01.mp4"
  );
  fs.access(fileName, "r", (err) => {
    if (!err) fs.createReadStream(fileName).pipe(res);
    else next(err);
  });
});
router.get("/endings", (req, res, next) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let fileName = path.join(
    __dirname,
    process.env.MEDIA_PATH + "/CY/openings/01.mp4"
  );
  fs.access(fileName, "r", (err) => {
    if (!err) fs.createReadStream(fileName).pipe(res);
    else next(err);
  });
});
router.get("/episodes", (req, res, next) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let fileName = path.join(
    __dirname,
    process.env.MEDIA_PATH + "/CY/openings/01.mp4"
  );
  fs.access(fileName, "r", (err) => {
    if (!err) fs.createReadStream(fileName).pipe(res);
    else next(err);
  });
});
router.get("/openings", (req, res, next) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let fileName = path.join(
    __dirname,
    process.env.MEDIA_PATH + "/CY/openings/01.mp4"
  );
  fs.access(fileName, "r", (err) => {
    if (!err) fs.createReadStream(fileName).pipe(res);
    else next(err);
  });
});
router.get("/portada", (req, res, next) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let fileName = path.join(
    __dirname,
    process.env.MEDIA_PATH + "/CY/openings/01.mp4"
  );
  fs.access(fileName, "r", (err) => {
    if (!err) fs.createReadStream(fileName).pipe(res);
    else next(err);
  });
});
router.use(
  "/chat",
  express.static(path.join(__dirname, "../../static/chat.html"))
);
router.get("/notify", (req, res, next) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let fileName = path.join(
    __dirname,
    "../../static/notifications/notification.mp3"
  );
  fs.access(fileName, "r", (err) => {
    if (!err) fs.createReadStream(fileName).pipe(res);
    else next(err);
  });
});
module.exports = router;
