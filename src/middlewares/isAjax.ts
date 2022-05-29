import { Request } from 'express';

export default (req:Request) => {
  return !req.accepts("html") || req.xhr ? true : false;
};