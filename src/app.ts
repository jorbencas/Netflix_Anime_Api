// import express, { Request, Response, NextFunction } from "express";
// import responseCustome from "./utils/index";
import express from 'express';
// import pino from "pino";
import cors from "cors";
// import errorhandler from "errorhandler";
import DBConnect from "./db/index";
import apitoken from "./middlewares/apitoken";
import notfound from "./middlewares/404";
import errors from "./middlewares/error";
import routes from "./routes/api/index";
import statics from "./routes/static/index";
// import isLocalHost from "./middlewares/isLocalHost";
// import { apollo } from "graphql/index";
DBConnect();
const app = express();
// app.use(pino());
app.use(cors());
app.use(express.text({ type: "text/html" }));
app.use(express.json({ type: "application/json" }));
app.use(express.urlencoded({ extended: true }));
// app.use(errorhandler);
app.use(apitoken);
// app.get("/", (req: Request, _res: Response, next: NextFunction) => {
//    const dest = pino.destination('/dev/null');
// dest[Symbol.for('pino.metadata')]: Object  = true;
// const logger = pino(dest);
// logger.info({a: 1}, 'hi');
// const { lastMsg, lastLevel, lastObj, lastTime} = dest;
// console.log(
//     `${req.url} - ${req.statusCode} - ${req.statusMessage}` +
//   'Logged message "%s" at level %d with object %o at time %s',
//   lastMsg, lastLevel, lastObj, lastTime
// ) // Logged message "hi" at level 30 with object { a: 1 } at time 1531590545089
// next();
// });
app.use("/api", routes);
app.use(statics);
app.use(errors);
// app.use("/graphql", apollo);
app.use(notfound);
export default app;