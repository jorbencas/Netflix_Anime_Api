require("dotenv").config();
require("./db/mongo");
const postgres = require("./db/postgres");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const sockets = require("./socketIo");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorhandler = require("errorhandler");
const { apitoken, notfound, errorHandler } = require("./middlewares");
const routes = require("./routes");
const { responseCustome } = require("./utils");
const path = require("path");
const fs = require("fs");

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.text({ type: "text/html" }));
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorhandler());
app.use(apitoken);
//routes
app.get("/pg", (req, res, next) => {
  postgres
    .query("SELECT * FROM animes")
    .then((result) => res.json(responseCustome("", 200, result.rows)))
    .catch((e) => console.error(e.stack))
    .then(() => postgres.end());
});
app.use("/api", routes);
app.use(
  "/animes",
  express.static(
    path.join(__dirname, process.env.MEDIA_PATH + "/CY/openings/01.mp4")
  )
);
app.use("/chat", express.static(path.join(__dirname, "/static/chat.html")));
app.get("/notify", (req, res, next) => {
  res.writeHead(200, { "content-type": "video/mp4" });
  let fileName = path.join(__dirname, "/static/musica/music.mp3");
  if (fs.access(file)) {
    fs.createReadStream(fileName).pipe(res);
  } else {
    next(err);
  }
});
//sockats
sockets(server);
app.use(notfound);
//error handler middleware
app.use(errorHandler);
//server
server.close();
let port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`El servidor esta corriendo ${port}`);
});
