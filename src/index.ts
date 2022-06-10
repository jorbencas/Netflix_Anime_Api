import { config } from "dotenv";
config();
import { connectMongo } from "./db/mongo";
import { connectPostgress } from "./db/postgres";
import express from "express";
import { createServer } from "node:http";
import sockets from "./socketIo";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import errorhandler from "errorhandler";
import apitoken from "./middlewares/apitoken";
import notfound from "./middlewares/404";
import errors from "./middlewares/error";
import routes from "./routes/api/index";
import statics from "./routes/static/index";
// import { apollo } from "./graphql/index";
const app = express();
const server = createServer(app);
connectMongo();
connectPostgress();
app.use(express());
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.text({ type: "text/html" }));
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorhandler());
app.use(apitoken);
sockets(server);
app.use("/api", routes);
app.use(statics);
// app.use("/graphql", apollo);
app.use(notfound);
app.use(errors);
var port: number = parseInt(`${process.env.PORT}`);
var hostname: string = process.env.HOSTNAME || "127.0.0.1";
server.listen(port, hostname, () => {
  console.log(`El servidor esta corriendo: 😱 😋 http://${hostname}:${port}`);
}).on("error", (e) => {
  console.log("Address in use, retrying..." + e.message);
}).close();


