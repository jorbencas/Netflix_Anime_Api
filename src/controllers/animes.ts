import { responseCustome } from "../utils/index";
import { postgress } from "../db/postgres";
import { Request, Response, NextFunction } from "express";
import { QueryResult } from "pg";
import { saveBackupAnime } from "../utils/backup";
import { insertMedia } from "./media";

const getlist = (_req: Request, res: Response, next: NextFunction) => {
  postgress
    .query(
      `SELECT a.valorations, a.siglas, a.state,
        (SELECT ma.name, ma.extension
          FROM media_animes ma 
          ON(ma.anime = a.siglas) 
          WHERE ma.type = 'portada'
        ) AS portada
      FROM animes a
      WHERE a.created IS NOT NULL `
    )
    .then((result: QueryResult) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e: Error) => {
      next(e);
    });
};

const getslides = (req: Request, res: Response, next: NextFunction) => {
  let {first, last} = req.params;
  postgress
    .query(
      `SELECT a.valorations, a.siglas, a.state,
        (SELECT ma.name, ma.extension
          FROM media_animes ma 
          ON(ma.anime = a.siglas) 
          WHERE ma.type = 'portada'
        ) AS portada
      FROM animes a
      OFFSET ${first} LIMIT ${last}`
    )
    .then((result: QueryResult) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e: Error) => {
      next(e);
    });
};

const getOne = (req: Request, res: Response, next: NextFunction) => {
  let { siglas } = req.params;
  postgress
  .query(
    `SELECT a.siglas, a.tittle, a.sinopsis, a.idiomas, a.date_publication, a.date_finalization, a.state, a.kind, a.valorations, a.kind, 
    (
      SELECT f.tittle, f.code 
      FROM filters f inner join anime_generes ag
      ON(ag.temporada = f.code) WHERE ag.anime = ${siglas}
    ) as temporadas,
    (
      SELECT f.tittle, f.code 
      FROM filters f inner join anime_generes ag
      ON(ag.genere = f.code) WHERE ag.anime = ${siglas}
    ) AS generes,
    (
      SELECT id, favorite 
      FROM anime_favorites
      WHERE anime = '${siglas}'
    ) AS favorite,
    (
      SELECT type, name, ext FROM media_anime WHERE id_external = ${siglas}
    ) AS media
    FROM animes a 
    WHERE a.siglas = '${siglas}'`
  )
  .then((result: any) => {
    console.log(result);
    result = result.rows.shift();
    let msg = `Se ha podido obtener la traducion del idioma {lang}`;
    res.json(responseCustome(msg, 200, result));
  })
  .catch((e: Error) => {
    next(e);
  });
};

const getNum = (_req: Request, res: Response, next: NextFunction) => {
  postgress
    .query(
      `SELECT count(a.siglas) FROM animes AS a WHERE a.created IS NOT NULL`
    )
    .then((result: QueryResult) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, result.rows.shift()));
    })
    .catch((e: Error) => {
      next(e);
    });
};

const lastByGenere = (_req: Request, res: Response, next: NextFunction) => {
  postgress
    .query(
    `SELECT a.valorations, a.siglas, a.state,
      (SELECT ma.name, ma.extension
        FROM media_animes ma 
        ON(ma.anime = a.siglas) 
        WHERE ma.type = 'portada'
      ) AS portada
    FROM filters AS f INNER JOIN anime_generes
    ON ag.generes LIKE ('%' || f.code::text || '%') 
    INNER JOIN animes a on(a.siglas = ag.anime)
    WHERE f.kind = 'generes')`
    )
    .then((result: QueryResult) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e: Error) => {
      next(e);
    });
};

const last = (_req: Request, res: Response, next: NextFunction) => {
  postgress
    .query(
      `SELECT a.valorations, a.siglas, a.state,
        (SELECT ma.name, ma.extension
          FROM media_animes ma 
          ON(ma.anime = a.siglas) 
          WHERE ma.type = 'portada'
        ) AS portada
      FROM animes a inner join anime_generes ag
      ON(a.siglas = ag.anime) 
      WHERE a.created IS NOT NULL`
    )
    .then((result: QueryResult) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e: Error) => {
      next(e);
    });
};

const getFavorite = (req: Request, res: Response, next: NextFunction) => {
  let lang = req.params.lang;
  postgress
    .query(
      `SELECT a.valorations, a.siglas, a.state,
        (SELECT ma.name, ma.extension
          FROM media_animes ma 
          ON(ma.anime = a.siglas) 
          WHERE ma.type = 'portada'
        ) AS portada
    FROM langs l inner join translation_filter tf
    ON(l.id = tf.id_external) 
    WHERE l.code = ${lang} AND tf.kind = 'langs'`
    )
    .then((result: QueryResult) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e: Error) => {
      next(e);
    });
};

const addFavorite = (req: Request, res: Response, next: NextFunction) => {
  let { anime } = req.params;
  postgress
    .query(
      `UPDATE anime_favorites SET favorite WHERE anime = '${anime}';`
    )
    .then((result: QueryResult) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e: Error) => {
      console.log(e);
      postgress
      .query(
        `INSERT INTO anime_favorites(anime, favorite) VALUES('${anime}',true);`
      )
      .then((result: QueryResult) => {
        console.log(result);
        let msg = `Se ha podido obtener la traducion del idioma {lang}`;
        res.json(responseCustome(msg, 200, result.rows));
      })
      .catch((e: Error) => {
        next(e);
      });
    });
};

const removeFavorite = (req: Request, res: Response, next: NextFunction) => {
  let {id} = req.params;
  postgress
    .query(
      `UPDATE anime_favorites SET favorite WHERE id = '${id}';`
    )
    .then((result: QueryResult) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e: Error) => {
      next(e);
    });
};

const insert = (req: Request, res: Response, next: NextFunction) => {
  const {
    siglas,
    state,
    date_publication,
    date_finalization,
    tittle,
    sinopsis,
    idioma,
    generes,
    temporadas,
  } = req.body;

  postgress
    .query(
      `INSERT INTO animes (tittle, sinopsis, siglas, state, date_publication, date_finalization, idiomas, temporadas) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
      [
        tittle,
        sinopsis,
        siglas,
        state,
        date_publication,
        date_finalization,
        idioma,
      ]
    )
    .then((result: QueryResult) => {
      console.log(result);
      saveBackupAnime(siglas,{'siglas':siglas}, result.rows, 'animes');
      let sql = "INSERT INTO anime_generes (genere, anime) VALUES ";
      generes.forEach((genere: string) => {
        sql += `('${genere}', '${siglas}') RETURNING id;`;
      });
      postgress
        .query(sql)
        .then((r: QueryResult) => {
          console.log(r);
          insertMedia(req, res, next);
          saveBackupAnime(siglas,{'id':r.rows}, r.rows, 'anime_generes');
          let msg = `Se ha podido obtener la traducion del idioma {lang}`;
          res.json(responseCustome(msg, 200, r.rows));
        })
        .catch((e: Error) => {
          next(e);
        }).finally( () => {
          let sql = "INSERT INTO anime_temporadas (genere, anime) VALUES ";
          temporadas.forEach((temporada: string) => {
            sql += `('${temporada}', '${siglas}') RETURNING id;`;
          });

          postgress
          .query(sql)
          .then((r: QueryResult) => {
            console.log(r);
            saveBackupAnime(siglas,{'id':r.rows}, r.rows, 'anime_temporadas');
          })
          .catch((e: Error) => {
            next(e);
          });
      });
    })
    .catch((e: Error) => {
      next(e);
    }).finally( () => {
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, null));
    });
};

const edit = (req: Request, res: Response, next: NextFunction) => {
  const {
    siglas,
    state,
    date_publication,
    date_finalization,
    titulo,
    sinopsis,
    idiomas,
    generes,
    temporadas,
  } = req.body;

  postgress
    .query(
      `UPDATE FROM animes SET tittle = $1, sinopsis = $2, state = $3, date_publication = $4, date_finalization = $5, idiomas = $6) WHERE siglas=$7`,
      [
        titulo,
        sinopsis,
        state,
        date_publication,
        date_finalization,
        idiomas,
        siglas
      ]
    )
    .then((result: QueryResult) => {
      console.log(result);
      saveBackupAnime(siglas,{'siglas':siglas}, result.rows, 'animes');
      let sql = "";
      generes.forEach((genere: string) => {
        sql += `UPDATE FROM anime_generes genere=${genere} WHERE anime=${siglas});`;
      });

      postgress
        .query(sql)
        .then((r: QueryResult) => {
          console.log(r);
          saveBackupAnime(siglas,{'id':r.rows}, r.rows, 'anime_generes');
          let msg = `Se ha podido obtener la traducion del idioma {lang}`;
          res.json(responseCustome(msg, 200, r.rows));
        })
        .catch((e: Error) => {
          next(e);
        }).finally( () => {
          let sql = "";
          temporadas.forEach((temporada: string) => {
            sql += `UPDATE anime_temporadas SET genere = '${temporada}' WHERE anime = '${siglas}';`;
          });

          postgress
          .query(sql)
          .then((r: QueryResult) => {
            console.log(r);
            insertMedia(req, res, next);
            saveBackupAnime(siglas,{'id':r.rows}, r.rows, 'anime_temporadas');
            let msg = `Se ha podido obtener la traducion del idioma {lang}`;
            res.json(responseCustome(msg, 200, r.rows));
          })
          .catch((e: Error) => {
            next(e);
          });
      });
    })
    .catch((e: Error) => {
      next(e);
    });
};

export {
  getlist,
  getslides,
  getOne,
  getNum,
  last,
  lastByGenere,
  getFavorite,
  addFavorite,
  removeFavorite,
  insert,
  edit,
};
