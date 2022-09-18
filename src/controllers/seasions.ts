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


const getListIds = (req: Request, res: Response, next: NextFunction) => {
    const { siglas } = req.params;
    postgress
  .query(`SELECT s.tittle, m.extension, m.name, m.kind 
    FROM seasions AS s INNER JOIN animes AS a ON a.id = s.anime
    INNER JOIN media_animes AS m ON(m.id_external = a.id)
    WHERE a.id = ${siglas} AND m.kind = 'portada'`)
  .then((result: QueryResult) => {
    let resultados = result.rows.map( (e: QueryResultRow) => {
      e = handleMedia(e, siglas, req);
    });
    res.json(responseCustome("Se han obtenido la lista de ids de las seasions", 200, resultados))
  }).catch((err: Error) => {
    next(err);
  });
}

export { getSasion, getListIds };
