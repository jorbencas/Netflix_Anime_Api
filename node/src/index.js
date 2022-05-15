require("dotenv").config();
const { connectMongo } = require("./db/mongo.js");
const { connectPostgress } = require("./db/postgres.js");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const sockets = require("./socketIo.js");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorhandler = require("errorhandler");
const apitoken = require("./middlewares/apitoken.js");
const notfound = require("./middlewares/404.js");
const errors = require("./middlewares/error.js");
const routes = require("./routes/api/index.js");
const satics = require("./routes/static/index.js");
const { apollo } = require("./graphql/index.js");
connectMongo();
connectPostgress();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.text({ type: "text/html" }));
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorhandler());
app.use(apitoken);
sockets(server);
app.use("/api", routes);
app.use(satics);
app.use("/graphql", apollo);
app.use(notfound);
app.use(errors);
let port = process.env.PORT || 3001;
const runServer = (port, server) => {
  server.listen(port, () => {
    console.log(`El servidor esta corriendo ${port}`);
  });
};
runServer(port, http);
server.on("error", (e) => {
  if (e.code === "EADDRINUSE") {
    console.log("Address in use, retrying...");
    setTimeout(() => {
      server.close();
      runServer(port, server);
    }, 1000);
  }
});
