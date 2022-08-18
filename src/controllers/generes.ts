import responseCustome from "@utils/index";
import { postgress } from "@db/postgres";
import { Request, Response, NextFunction } from 'express';

const getDefualtGeneres = (_req: Request, res: Response, next: NextFunction) => {
    postgress
    .query("SELECT id, code FROM filters AS f INNER JOIN translation_filters AS tf ON f.id = tf.filter_id INNER JOIN langs AS l ON l.id = tf.lang WHERE f.type = 'generes' AND l.code = 'es'")
    .then((result) => res.json(responseCustome("", 200, result.rows)))
    .catch((err) => {
      next(err);
    });
}

const getGeneresOfAnime = (_req: Request, res: Response, next: NextFunction) => {
  postgress
    .query("SELECT id, code FROM filters AS f INNER JOIN translation_filters AS tf ON f.id = tf.filter_id INNER JOIN langs AS l ON l.id = tf.lang WHERE f.type = 'generes' AND l.code = 'es'")
    .then((result) => res.json(responseCustome("", 200, result.rows)))
    .catch((err) => {
      next(err);
    });
}

const insert = (_req: Request, res: Response, next: NextFunction) => {
  postgress
    .query("INSERT INTO filters (type) VALUES ('generes')")
    .then((result) => res.json(responseCustome("", 200, result.rows)))
    .catch((err) => {
      next(err);
    }
    );
}

const deleteAll = (_req: Request, res: Response, next: NextFunction) => {
  postgress
    .query("DELETE FROM filters WHERE type = 'generes'")
    .then((result) => res.json(responseCustome("", 200, result.rows)))
    .catch((err) => {
      next(err);
    }
    );
}


export { 
  getDefualtGeneres, 
  getGeneresOfAnime, 
  insert, 
  deleteAll 
};