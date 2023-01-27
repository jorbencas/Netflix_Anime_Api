import { responseCustome } from "../utils/index";
import { postgress } from "../db/postgres";
import { Request, Response, NextFunction } from "express";
import { QueryResult } from "pg";
import { saveBackupAnime } from "../utils/backup";
import { insertMedia } from "./media";

const getlist = (_req: Request, res: Response, next: NextFunction) => {
  postgress
  .query(
    `SELECT a.valorations, a.siglas, a.state, ma.type, ma.id
    FROM animes a LEFT JOIN media_animes ma ON(ma.anime = a.siglas) 
    WHERE ma.type = 'portada'`
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
    ma.id, ma.type
    FROM animes a INNER JOIN media_anime ma ON(a.siglas = ma.anime)
    WHERE ma.type = 'portada'
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
    `SELECT a.siglas, a.tittle, a.sinopsis, a.idiomas, a.date_publication, a.date_finalization, a.state, a.valorations, a.kind, 
    af.id as idFvorite, af.favorite as favorite,
    temp.tittle, temp.code, gen.tittle, gen.code,
    mb.type, mb.id, mp.type, mp.id
    FROM animes a 
    INNER JOIN anime_favorite as af ON(af.anime = a.siglas)
    LEFT JOIN (
      SELECT f.tittle, f.code, ag.anime 
      FROM filters f inner join anime_generes ag
      ON(ag.temporada = f.code)
    ) as temp
    ON(temp.anime = a.siglas)
    LEFT JOIN (
      SELECT f.tittle, f.code, ag.anime 
      FROM filters f inner join anime_generes ag
      ON(ag.genere = f.code)
    )  AS gen
    ON(gen.anime = a.siglas)
    LEFT JOIN (
      SELECT type, name, ext, id_external 
      FROM media_anime 
      WHERE type = 'banner' 
    ) AS mb
    ON(mb.id_external = a.siglas)
    LEFT JOIN (
      SELECT type, name, ext, id_external 
      FROM media_anime 
      WHERE type = 'portada' 
    ) AS mp
    ON(mp.id_external = a.siglas)
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
    ma.type, ma.name, ma.extension
    FROM filters AS f INNER JOIN anime_generes
    ON ag.generes LIKE ('%' || f.code::text || '%') 
    INNER JOIN animes a on(a.siglas = ag.anime)
    INNER JOIN media_anime ON(ma.anime = a.siglas) 
    WHERE ma.type = 'portada' AND f.kind = 'generes'`
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
      ma.type, ma.name, ma.extension
      FROM animes a inner join anime_generes ag
      ON(a.siglas = ag.anime) 
      INNER JOIN media_anime ON(ma.anime = a.siglas) 
      WHERE ma.type = 'portada'`
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

const getFavorite = (_req: Request, res: Response, next: NextFunction) => {
  postgress
    .query(
      `SELECTa.siglas, a.tittle, a.sinopsis, a.idiomas, a.date_publication, a.date_finalization, a.state, a.valorations, a.kind, 
    af.id as idFvorite, af.favorite as favorite
    FROM animes a 
    INNER JOIN anime_favorite as af ON(af.anime = a.siglas)`
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
