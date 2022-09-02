import {responseCustome  } from "../utils/index";
import { postgress } from "../db/postgres";
import { Request, Response, NextFunction } from 'express';
import { QueryResult } from 'pg';

const getDefualtGeneres = (_req: Request, res: Response, next: NextFunction) => {
  postgress
    .query("SELECT id, code, kind, tittle FROM filters AS  WHERE kind = 'generes'")
    .then((result: QueryResult) => res.json(responseCustome("", 200, result.rows)))
    .catch((err: Error) => {
      next(err);
    });
}

const insert = (req: Request, res: Response, next: NextFunction) => {
  let { code, tittle } = req.body;
  postgress
    .query("INSERT INTO filters (code, kind, tittle) VALUES ($1, $2, $3) RETURNING *", [code, 'generes', tittle])
    .then((result: QueryResult) => {
      res.json(responseCustome("", 200, result.rows))
    })
    .catch((err: Error) => {
      next(err);
    });
}

const deleteAll = (_req: Request, res: Response, next: NextFunction) => {
  postgress.query("SELECT code FROM filters WHERE kind = 'generes'").then((result: QueryResult) => {
    result.rows.forEach((row) => {
      postgress.query("DELETE FROM filters WHERE code = $1 AND type = 'generes'", [row.code]).then((result: QueryResult) => {
        res.json(responseCustome("", 200, result.rows));
      }).catch((err: Error) => {
        next(err);
      });
    });
  }).catch((err: Error) => {
    next(err);
  });
}

export { 
  getDefualtGeneres,
  insert, 
  deleteAll 
};