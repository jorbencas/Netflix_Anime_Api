import { readMyDir, responseCustome } from "../utils/index";
import { Request, Response, NextFunction } from "express";
import { PathLike } from "node:fs";
import path from "node:path";
// import fileUpload from 'express-fileupload';
// import express from "express";
import { MEDIA_PATH } from "../config";

const defaultSiglas = async (_req: Request, res: Response, _next: NextFunction) => {
  const PATH_TO_FILES : PathLike = path.join(
    __dirname,
    "/../" + MEDIA_PATH
  );

  let file:any = await readMyDir(PATH_TO_FILES);
  const siglas: string[] | undefined = file.filter((stat: string) => stat.trim() !== 'nuevos');
  res.status(200).json(responseCustome('La lista de siglas', 200, siglas));
};

export { defaultSiglas };