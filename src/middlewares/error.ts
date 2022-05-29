import { Request, Response } from 'express';
import responseCustome from "../utils/index";

export default (err: Error, _req: Request, res: Response) => {
  const error = process.env.NODE_ENV === "dev" ? err.message : "";
  let status = parseInt(`${err.stack}`) || 500;
  if (err.name === "ValidationError") {
    status = 422;
    res.status(status).json(responseCustome(error, status, err));
  } else {
    res.status(status).json(responseCustome(error, status));
  }
};