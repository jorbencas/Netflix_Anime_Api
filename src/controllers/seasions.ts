import {responseCustome  } from "../utils/index";
import { postgress } from "../db/postgres";
import { Request, Response, NextFunction } from "express";
import { QueryResult } from "pg";
import router from '../routes/api/seasions';

const getSasions = (req: Request, res: Response) => {
  let { siglas } = req.params;

  res.json(
    responseCustome("Ok", 200, siglas)
  );

  postgress
    .query(
      `SELECT s.title, m.extension, m.name 
      FROM seasions AS s INNER JOIN animes AS a ON a.id = s.anime
      INNER JOIN media_animes AS m ON(m.id_external = a.id)
      WHERE a.id = ${siglas} AND m.kind = 'portada'`
    )
    .then((result: QueryResult) => {
      console.log(result);

      let resultados = result.rows.map( e) => {
        e.media = req.router
      })
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      console.error(e.stack);
      let msg = `No se ha podido obtener la traducion del idioma {lang}`;
      res.status(500).json(responseCustome(msg, 500));
    });
};

const getCode = (_req: Request, res: Response, next: NextFunction) => {
  postgress
    .query("SELECT id, code FROM langs")
    .then((result: QueryResult) =>
      res.json(responseCustome("", 200, result.rows))
    )
    .catch((err: Error) => {
      next(err);
    });
};

export { getSasions, getCode };
