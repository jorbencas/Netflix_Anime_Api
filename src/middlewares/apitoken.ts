import { Request, Response, NextFunction } from 'express';
import { API_TOKEN } from '../config';
import { responseCustome } from "../utils/index";
import { isLocalHost } from '../utils/validators';

export default (req: Request, res: Response, next: NextFunction) => {
  if (
    !isLocalHost(req) &&
    (typeof req.headers.authorization == "undefined" ||
      req.headers.authorization !== API_TOKEN)
  ) {
    let message = `No estas autorizado para utilizar la api de cosas de anime`;
    let s = 401;
    res.status(s).json(responseCustome(message, s));
  } else {
    next();
  }
};