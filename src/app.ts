import express from 'express';
import cors from "cors";
import helmet from 'helmet';
import apitoken from "./middlewares/apitoken";
import notfound from "./middlewares/404";   
import errors from "./middlewares/error";
import routes from "./routes/api/index";
import apiscripts from "./routes/scripts/index";
import chat from './routes/static/chat';
import media from './routes/static/media';
import fileStatic from './routes/static/file';
// import ExpressPinoLogger from "express-pino-logger";
// import { logger } from "./libs/pino";
const app = express();
app.use(
    cors({ 
        origin:[
            'http://localhost:3000', 'http://localhost:3001'
        ]
    })
);
// app.use(
//   ExpressPinoLogger({
//     logger,
//   })
// );
app.use(express.text({ type: "text/html" }));
app.use(express.json({ type: "application/json" }));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(apitoken);
app.use("/api", routes);
app.use("/media", media);
app.use("/chat", chat);
app.use('/scripts',apiscripts);
app.use('/file',fileStatic);
app.use(errors);
app.use(notfound);
export default app;