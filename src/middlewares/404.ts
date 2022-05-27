import { NextFunction, Request, Response } from 'express';
const { responseCustome } = require("../utils/index.js");
export default (req: Request, res: Response, next: NextFunction) => {
  let status = 404;
  res.status(status).json(responseCustome("Endpoint Not found", status)).end();
};
