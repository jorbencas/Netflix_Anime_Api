import {handleMedia, responseCustome  } from "../utils/index";
import { postgress } from "../db/postgres";
import { Request, Response, NextFunction } from "express";
import { QueryResult, QueryResultRow } from "pg";

const getSasion = (req: Request, res: Response) => {
  let { id } = req.params;
  postgress
    .query(`SELECT tittle FROM seasions WHERE id = ${id}`)
    .then((result: QueryResult) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      console.error(e.stack);
      let msg = `No se ha podido obtener la traducion del idioma {lang}`;
      res.status(500).json(responseCustome(msg, 500));
    });
};

const insert = (req: Request, res: Response, next: NextFunction) => {
    const { tittle, siglas } = req.body;
    postgress
  .query(`INSERT INTO seasions(tittle,anime) VALUES('${tittle}', '${siglas}')`)
  .then((result: QueryResult) => {
    console.log(result);
    res.json(responseCustome("Se han obtenido la lista de ids de las seasions", 200, result))
  }).catch((err: Error) => {
    next(err);
  });
}

export { getSasion, insert };
