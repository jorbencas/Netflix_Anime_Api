import { responseCustome } from "../utils/index";
import { postgress } from "../db/postgres";
import { Request, Response, NextFunction } from 'express';
import { QueryResult } from 'pg';
import { saveBackupAnime, updateIdAcumulative } from "../utils/backup";
import { insertMedia } from "./media";

const getbyAnime = (req: Request, res: Response, next: NextFunction) => {
    let siglas = req.params.siglas;
    postgress
        .query(
        `SELECT e.id, e.anime, e.nombre, e.descripcion,  
        a.siglas, e.num, a.kind, ma.name, ma.extension
        FROM openings as e
        INNER JOIN animes AS a ON a.siglas = e.anime 
        INNER JOIN media_animes ma ON(ma.anime = a.siglas) 
        WHERE e.anime = ${siglas} AND ma.type = 'portada'`)
        .then((result) => {
        console.log(result);
        let msg = `Se ha podido obtener la traducion del idioma {lang}`;
        res.json(responseCustome(msg, 200, result.rows));
        })
        .catch((e: Error) => {
        // let msg = `No se ha podido obtener la traducion del idioma {lang}`;
        next(e);
        });
}

const getOne = (req: Request, res: Response, next: NextFunction) => {
  let id = req.params.id;
  postgress
  .query(
  `SELECT e.id, e.anime, e.tittle, e.sinopsis,  
  a.siglas, e.num, ma.name, ma.extension
  FROM openings as e
  LEFT JOIN seasions_openings se ON(se.opening = e.id)
  INNER JOIN animes AS a ON a.siglas = e.anime
  INNER JOIN media_openings ma ON(ma.opening = e.id) 
  WHERE e.id = ${id}`)
  .then((result) => {
  console.log(result);
  let msg = `Se ha podido obtener la traducion del idioma {lang}`;
  res.json(responseCustome(msg, 200, result.rows));
  })
  .catch((e: Error) => {
  // let msg = `No se ha podido obtener la traducion del idioma {lang}`;
  next(e);
  });
}

const insert = (req: Request, res: Response, next: NextFunction) => {
  const { id, tittle, sinopsis, date_publication, date_finalization, anime, num, seasion } = req.body;
  let ID = updateIdAcumulative(id,'openings', 'id');
    postgress.query(`INSERT INTO openings (id, tittle, sinopsis,date_publication, date_finalization anime, num, seasion) VALUES($1, $2, $3, $4, $5, $6) RETURNNING *`, [ID, tittle, sinopsis, date_publication, date_finalization, anime, num, seasion])
    .then((result: QueryResult) => {
      saveBackupAnime(anime,{id:ID},result.rows, 'openings');
      insertMedia(req, res, next);
      res.json(responseCustome("", 200, result.rows))
    })
    .catch((err: Error) => {
      next(err);
    });
};

const edit = (req: Request, res: Response, next: NextFunction) => {
    const { id, tittle, sinopsis, date_publication, date_finalization, anime, num, seasion  } = req.body;
    postgress
    .query(`UPDATE FROM openings tittle=$2, sinopsis=$3, date_publication=$4, date_finalization=$5, num=$6, seasion=$7 WHERE id=$1 RETURNNING *;`, [id, tittle, sinopsis, date_publication, date_finalization, num, seasion])
    .then((result: QueryResult) => {
      saveBackupAnime(anime,['id',id],result.rows, 'openings');
      insertMedia(req, res, next);
      res.json(responseCustome("", 200, result.rows))
    })
    .catch((err: Error) => {
      next(err);
    });
};

const deleteOne = (req: Request, res: Response, next: NextFunction) => {
    const { id, anime } = req.body;
    postgress
    .query(`DELETE FROM openings WHERE id=$1;`, [id ])
    .then((result: QueryResult) => {
      saveBackupAnime(anime,['id',id],result.rows, 'openings');
      insertMedia(req, res, next);
      res.json(responseCustome("", 200, result.rows))
    })
    .catch((err: Error) => {
      next(err);
    });
};

const deletebyanime = (req: Request, res: Response, next: NextFunction) =>{
  const { anime } = req.body;
  postgress
  .query(`DELETE FROM openings WHERE anime=$1;`, [anime ])
  .then((result: QueryResult) => {
    saveBackupAnime(anime,['anime',anime],result.rows, 'openings');
    insertMedia(req, res, next);
    res.json(responseCustome("", 200, result.rows))
  })
  .catch((err: Error) => {
    next(err);
  });
}

const getListIds = (req: Request, res: Response, next: NextFunction) => {
     const { siglas } = req.params;
     postgress
    .query(`SELECT id FROM openings WHERE anime = ${siglas}`)
    .then((result: QueryResult) =>
      res.json(responseCustome("", 200, result.rows))
    )
    .catch((err: Error) => {
      next(err);
    });
}
export {
    getbyAnime,
    getOne,
    getListIds,
    insert,
    edit,
    deleteOne,
    deletebyanime
};