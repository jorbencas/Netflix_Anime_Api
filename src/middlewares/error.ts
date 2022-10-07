import { Request, Response, NextFunction } from 'express';
// import {responseCustome  } from "../utils/index";

export default (err: Error, _req: Request, res: Response, next: NextFunction) => {
  if (typeof err !== undefined ) {
    let s = parseInt(`${err.stack}`) || 404;
    // let msg = err.message ? err.message : err?.detail;
    // const { status } = responseCustome(msg, s);
    // if (err.name === "ValidationError") {
    //   s = 422;
    //   res.status(s).json(status);
    // } else {
      res.status(s).json(err);
    // }
  } else {
    console.log('====================================');
    console.log(err);
    console.log('====================================');
    next();
  }
};