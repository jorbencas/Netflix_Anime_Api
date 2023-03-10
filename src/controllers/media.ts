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

  let file = await readMyDir(PATH_TO_FILES);
  const siglas: string[] | undefined = file?.filter((stat: string) => stat.trim() !== 'nuevos');
  res.json(responseCustome('La lista de siglas', 200, siglas));
};

const insertMedia = (req: Request, res: Response, _next: NextFunction) => {
// const app = express();
console.log('====================================');
console.log(req.files);
console.log('====================================');
 res.json(responseCustome("FUFUFUFU", 200, req));
// app.use(fileUpload);
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

  const { tabla,mediaFiles, mediaFiles2, kind, id_external } = req.body;
    // postgress
    // .query(
    //   `INSERT INTO media_${tabla} VALUES()`
    // )
    // .then((result: QueryResult) => {
    //   console.log(result);
    //   let msg = `Se ha podido obtener la traducion del idioma {lang}`;
    //   res.json(responseCustome(msg, 200, result.rows));
    // })
    // .catch((e: Error) => {
    //   next(e);
    // });
    console.log(tabla);
    console.log(mediaFiles);
    console.log(mediaFiles2);
    console.log(id_external);
    console.log(kind);
    res.json(responseCustome("", 200, req.body));
}

export { defaultSiglas, insertMedia };