import { Request, Response, NextFunction } from 'express';
import responseCustome from "@utils/index";
import isLocalHost from "./isLocalHost";

export default (req: Request, res: Response, next: NextFunction) => {
  if (
    !isLocalHost(req) &&
    (typeof req.headers.api_token == "undefined" ||
      req.headers.api_token == process.env.API_TOKEN)
  ) {
    let message = `No estas autorizado para utilizar la api de cosas de anime`;
    let status = 401;
    res.status(status).json(responseCustome(message, status)).end();
  } else {
    next();
  }
};