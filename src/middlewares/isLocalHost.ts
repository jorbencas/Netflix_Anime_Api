import { Response } from "express";

export default (req: Response) => {
  return req.header.toString().includes("localhost") ? true : false;
};
