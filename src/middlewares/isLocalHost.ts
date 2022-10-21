import { Request } from 'express';

export default (req: Request) => {
  return req.headers.host?.includes("localhost");
};