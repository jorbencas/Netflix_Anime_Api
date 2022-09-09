// import { responseCustome, sendEmail } from "../utils/index";
import { responseCustome } from "../utils/index";

import { Request, Response, NextFunction } from "express";
import { readdir, access } from 'node:fs/promises';
import { PathLike, existsSync } from "node:fs";
import path from "node:path";
import fileUpload from 'express-fileupload';
import express from "express";

const defaultSiglas = (_req: Request, res: Response, next: NextFunction) => {
  const PATH_TO_FILES : PathLike = path.join(
    __dirname,
    "/../" + process.env.MEDIA_PATH
  );

  if (existsSync(PATH_TO_FILES)) {
    access(PATH_TO_FILES, 7).then(() => {
      readdir(PATH_TO_FILES).then((file: string[]) => {
        const siglas = file.filter((stat: string) => stat.trim() !== 'nuevos');
        // sendEmail();
        res.json(responseCustome('La lista de siglas', 200, siglas));
      }).catch((err: Error) => {
        next(err);
      });
    }).catch((err: Error) => {
      next(err);
    });
  } else {
    next(new Error("No hay lista de siglas disponibles"));
  }
};

const insert = (req: Request, _res: Response, _next: NextFunction) => {
const app = express();
app.use(fileUpload);
  if(!req.files){
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
  } else {
     console.log('====================================');
    console.log(req.files);
    console.log('====================================');
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    // const [] = req.body;
  }
}

export { defaultSiglas, insert };
