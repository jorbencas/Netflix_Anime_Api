import DBConnect from "./db/index";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import errorhandler from "errorhandler";
import apitoken from "./middlewares/apitoken";
import notfound from "./middlewares/404";
import errors from "./middlewares/error";
import routes from "./routes/api/index";
import statics from "./routes/static/index";
// import { apollo } from "./graphql/index";
DBConnect();
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.text({ type: "text/html" }));
app.use(express.json({ type: "application/json" }));
app.use(express.urlencoded({ extended: true }));
app.use(errorhandler());
app.use(apitoken);
app.use("/api", routes);
app.use(statics);
// app.use("/graphql", apollo);
app.use(notfound);
app.use(errors);
export default app;