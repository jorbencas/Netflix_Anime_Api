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
const middlewares = require("./middlewares");
const routes = require("./routes");
// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.text({ type: "text/html" }));
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorhandler());
app.use(middlewares.apitoken);
//routes
app.get("/pg", (req, res, next) => {
  postgres
    .query("SELECT * FROM animes")
    .then((result) => res.json({ data: result.rows }))
    .catch((e) => console.error(e.stack))
    .then(() => postgres.end());
});
app.use(routes);
app.use(middlewares.notfound);
//sockats
sockets(server);
//error handler middleware
app.use(middlewares.errorHandler);
//server
let port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`El servidor esta corriendo ${port}`);
});
