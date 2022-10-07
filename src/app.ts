// import express, { Request, Response, NextFunction } from "express";
// import responseCustome from "./utils/index";
import express from 'express';
// import pino from "pino-http";
import cors from "cors";
// import errorhandler from "errorhandler";
import DBConnect from "./db/index";
import apitoken from "./middlewares/apitoken";
import notfound from "./middlewares/404";
import errors from "./middlewares/error";
import routes from "./routes/api/index";
import statics from "./routes/static/index";
// import { saveBackup } from "./utils";
// import { insertAll } from "./controllers/generes";
// import { checkTables } from "./utils";
// import isLocalHost from "./middlewares/isLocalHost";
DBConnect();
const app = express();
app.use(cors());
app.use(express.text({ type: "text/html" }));
app.use(express.json({ type: "application/json" }));
app.use(express.urlencoded({ extended: true }));
// app.use(errorhandler);
app.use(apitoken);
// const logger = pino({
//   // Reuse an existing logger instance
//   level:'debug'
// })
// app.use(logger);

// app.use("/", (req: Request, _res: Response, next: NextFunction) => {
    // saveBackup('X',{},'episodes');
    // insertAll(_req,_res,next);
    // checkTables();
    //  next(req);
// });
app.use("/api", routes);
app.use(statics);
app.use(errors);
app.use(notfound);
export default app;