import { Request, Response, NextFunction } from 'express';
import { API_TOKEN } from '../config';
import { responseCustome } from "../utils/index";
// import { isLocalHost } from '../utils/validators';

export default (req: Request, res: Response, next: NextFunction) => {
  if (
    // !isLocalHost(req) &&
    (typeof req.headers.api_token == "undefined" ||
      req.headers.api_token == API_TOKEN)
  ) {
    let message = `No estas autorizado para utilizar la api de cosas de anime`;
    let s = 401;
    const { status } = responseCustome(message, s);

    res.status(status.code).json(status).end();
  } else {
    next();
  }
};