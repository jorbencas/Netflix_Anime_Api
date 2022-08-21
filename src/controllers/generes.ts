import responseCustome from "../utils/index";
import { postgress } from "../db/postgres";
import { Request, Response, NextFunction } from 'express';
import { QueryResult } from 'pg';

const getDefualtGeneres = (_req: Request, res: Response, next: NextFunction) => {
    postgress
    .query("SELECT id, code FROM filters AS f INNER JOIN translation_filters AS tf ON f.id = tf.filter_id INNER JOIN langs AS l ON l.id = tf.lang WHERE f.type = 'generes' AND l.code = 'es'")
    .then((result: QueryResult) => res.json(responseCustome("", 200, result.rows)))
    .catch((err: Error) => {
      next(err);
    });
}

const insert = (req: Request, res: Response, next: NextFunction) => {
  let lang = req.params.lang;
  let { code, titulo } = req.body;
  postgress
    .query("INSERT INTO filters (code, kind) VALUES ($1, $2)", [code, 'generes'])
    .then((result: QueryResult) => {
      console.log('====================================');
      console.log(result);
      console.log('====================================');
      postgress
        .query("INSERT INTO translation_filters (id_external, lang, translation) VALUES ($1, $2, $3)", [code, lang, titulo])
        .then((result: QueryResult) => res.json(responseCustome("", 200, result.rows)))
        .catch((err: Error) => {
          next(err);
        });
    })
    .catch((err: Error) => {
      next(err);
    });
}

const deleteAll = (_req: Request, res: Response, next: NextFunction) => {
  postgress.query("SELECT code FROM filters WHERE kind = 'generes'").then((result: QueryResult) => {
    result.rows.forEach((row) => {
      postgress.query("DELETE FROM translation_filters WHERE id_external = $1", [row.code]).then((result: QueryResult) => {
        console.log(result);
        postgress.query("DELETE FROM filters WHERE code = $1 AND type = 'generes'", [row.code]).then((result: QueryResult) => {
          res.json(responseCustome("", 200, result.rows));
        }).catch((err: Error) => {
          next(err);
        });
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