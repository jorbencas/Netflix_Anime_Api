import { Request, Response } from 'express';
import {responseCustome  } from "../utils/index";

export default (_req: Request, res: Response) => {
  let status = 404;
  res.status(status).json(responseCustome("Endpoint Not found", status)).end();
};
