import {responseCustome } from "../utils/index";
import { postgress } from "../db/postgres";
import { Request, Response, NextFunction } from 'express';
import { QueryResult } from 'pg';
import { saveBackupAnime, updateIdAcumulative } from "../utils/backup";
import Anime from "../models/Anime";

const getbyAnime = (req: Request, res: Response, next: NextFunction) => {
    let siglas = req.params.siglas;
    postgress
        .query(
        `SELECT e.id, e.anime, e.nombre, e.descripcion,  
        a.siglas, e.num, a.kind, ma.name, ma.extension
        FROM episodes as e
        INNER JOIN animes AS a ON a.siglas = e.anime 
        INNER JOIN media_animes ma ON(ma.anime = a.siglas) 
        WHERE e.anime = ${siglas} AND ma.type = 'portada'`)
        .then((result) => {
        console.log(result);
        let msg = `Se ha podido obtener la traducion del idioma {lang}`;
        res.status(200).json(responseCustome(msg, 200, result.rows));
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
  FROM episodes as e
  LEFT JOIN seasions_episodes se ON(se.episode = e.id)
  INNER JOIN animes AS a ON a.siglas = e.anime
  INNER JOIN media_episodes ma ON(ma.episode = e.id) 
  WHERE e.id = ${id}`)
  .then((result) => {
  console.log(result);
  let msg = `Se ha podido obtener la traducion del idioma {lang}`;
  res.status(200).json(responseCustome(msg, 200, result.rows));
  })
  .catch((e: Error) => {
  // let msg = `No se ha podido obtener la traducion del idioma {lang}`;
  next(e);
  });
}


const getLast = (_req: Request, _res: Response, _next: NextFunction) => {
  
}

const getidrand = (_req: Request, _res: Response, _next: NextFunction) => {
    // db = api->getDb();
    // sql = "SELECT e.id, a.kind FROM episodes AS e INNER JOIN animes AS a ON(e.anime = a.id) ORDER BY random() LIMIT 1;";
    // valor = db->obtener_uno($sql);
    // if (isset($valor)) {
    //     return api->response("api_Episodes_last_msg", 200, valor);
    // } else {
    //     return api->response("api_Episodes_last_error_msg", 404); 
    // }

}

const insert = async (req: Request, res: Response, next: NextFunction) => {
    const { id, tittle, sinopsis, date_publication, date_finalization, anime, num, seasion  } = req.body;
    let ID = updateIdAcumulative(id,'episodes', 'id');
    postgress
    .query(`INSERT INTO episodes(id, tittle, sinopsis,date_publication, date_finalization anime, num, seasion) VALUES($1, $2, $3, $4, $5, $6) RETURNNING *`, [ID, tittle, sinopsis, date_publication, date_finalization, anime, num, seasion])
    .then(async (result: QueryResult) => {
                  let anim = new Anime();
            anim.setSiglas(anime);
            let saga = await anime.Obtener() ? anime.getSaga(): '';
      saveBackupAnime(saga,anime,{'id':ID}, result.rows,'episodes');
      res.status(200).json(responseCustome("", 200, result.rows))
    })
    .catch((err: Error) => {
      next(err);
    });
};

const edit = async (req: Request, res: Response, next: NextFunction) => {
    const { id, tittle, sinopsis, date_publication, date_finalization, anime, num, seasion  } = req.body;
    postgress
    .query(`UPDATE FROM episodes tittle=$2, sinopsis=$3, date_publication=$4, date_finalization=$5, num=$6, seasion=$7 WHERE id=$1 RETURNNING *;`, [id, tittle, sinopsis, date_publication, date_finalization, num, seasion])
    .then(async (result: QueryResult) => {
                  let anim = new Anime();
            anim.setSiglas(anime);
            let saga = await anime.Obtener() ? anime.getSaga(): '';
     saveBackupAnime(saga, anime,{'id':id}, result.rows,'episodes');
      res.status(200).json(responseCustome("", 200, result.rows))
    })
    .catch((err: Error) => {
      next(err);
    });
};

const deleteOne = () => {
    // const { id, anime } = req.body;
    // postgress
    // .query(`DELETE FROM episodes WHERE id=$1;`, [id ])
    // .then((result: QueryResult) => {
    //   saveBackupAnime(anime,['id',id],result.rows, 'episodes');
    //   insertMedia(req, res, next);
    //   res.status(200).json(responseCustome("", 200, result.rows))
    // })
    // .catch((err: Error) => {
    //   next(err);
    // });
};

const deletebyanime = () =>{
  // const { anime } = req.body;
  // postgress
  // .query(`DELETE FROM episodes WHERE anime=$1;`, [anime ])
  // .then((result: QueryResult) => {
  //   saveBackupAnime(anime,['anime',anime],result.rows, 'episodes');
  //   insertMedia(req, res, next);
  //   res.status(200).json(responseCustome("", 200, result.rows))
  // })
  // .catch((err: Error) => {
  //   next(err);
  // });
}

const getListIds = (req: Request, res: Response, next: NextFunction) => {
    const { siglas } = req.params;
     postgress
    .query(`SELECT id FROM episodes WHERE anime = ${siglas}`)
    .then((result: QueryResult) =>
      res.status(200).json(responseCustome("", 200, result.rows))
    )
    .catch((err: Error) => {
      next(err);
    });
}

export {
    getOne,
    getbyAnime,
    getLast,
    getidrand,
    getListIds,
    insert,
    edit,
    deleteOne,
    deletebyanime
};