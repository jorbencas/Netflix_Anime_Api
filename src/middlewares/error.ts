import { Request, Response, NextFunction } from 'express';
import {responseCustome  } from "../utils/index";

export default (err: Error, _req: Request, res: Response, next: NextFunction) => {
  let s = parseInt(`${err.stack}`) || 200;
  const { status } = responseCustome(err.message, s);
  if (err.name === "ValidationError") {
    s = 422;
    res.status(s).json(status);
  } else if(err.message.length > 0) {
    res.status(status?.code).json(status);
  } else {
    next();
  }
};