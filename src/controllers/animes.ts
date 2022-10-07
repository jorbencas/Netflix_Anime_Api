import { responseCustome } from "../utils/index";
import { postgress } from "../db/postgres";
import { Request, Response, NextFunction } from "express";
import { QueryResult } from "pg";
import { saveBackupAnime } from "../utils/backup_animes";

const getlist = (req: Request, res: Response, next: NextFunction) => {
  let lang = req.params.lang;
  postgress
    .query(
      `SELECT a.valorations, a.siglas, a.state, a.temporada, 
        a.date_publication, a.date_finalization, a.kind, 
        (SELECT ta.translation 
          FROM translation_animes ta 
          ON(ta.anime = a.siglas) 
          WHERE ta.lang = ${lang} 
          AND ta.kind = 'titulo'
        ) AS titulo
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
  let lang = req.params.lang;
  let first = req.params.first;
  let last = req.params.last;
  postgress
    .query(
      `SELECT a.valorations, a.siglas, a.state, a.temporada, 
        a.date_publication, a.date_finalization, a.kind, 
        (SELECT ta.translation 
          FROM translation_animes ta 
          ON(ta.anime = a.siglas) 
          WHERE ta.lang = ${lang} 
          AND ta.kind = 'titulo'
        ) AS titulo,
        (SELECT ma.name, ma.extension
          FROM media_animes ma 
          ON(ma.anime = a.siglas) 
          WHERE ma.type = 'portada'
        ) AS portada,
        (SELECT f.code, tf.translation FROM anime_generes ag 
          INNER JOIN filers f 
          ON(f.id = ag.genere AND a.siglas = ag.anime)
          INNER JOIN translation_filters tf ON(tf.id_external = f.id) 
          WHERE tf.kind = 'generes' AND tf.lang = '${lang}'
        ) AS generes_code, generes_name
      FROM animes a inner join
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
  let lang = req.params.lang;
  let siglas = req.params.siglas;
  postgress
    .query(
      `SELECT a.valorations, a.siglas, a.state, a.temporada, 
        a.date_publication, a.date_finalization, a.kind, 
        (SELECT ta.translation 
          FROM translation_animes ta 
          ON(ta.anime = a.siglas) 
          WHERE ta.lang = {lang} 
          AND ta.kind = 'titulo'
        ) AS titulo,
        (SELECT ta.translation 
          FROM translation_animes ta 
          ON(ta.anime = a.siglas) 
          WHERE ta.lang = {lang} 
          AND ta.kind = 'sinopsis'
        ) AS sinopsis,
        (SELECT ma.name, ma.extension
          FROM media_animes ma 
          ON(ma.anime = a.siglas) 
          WHERE ma.type = 'portada'
        ) AS portada,
        (SELECT ma.name, ma.extension
          FROM media_animes ma 
          ON(ma.anime = a.siglas) 
          WHERE ma.type = 'banner'
        ) AS banner,
        (SELECT f.code, tf.translation FROM anime_generes ag 
          INNER JOIN filers f 
          ON(f.id = ag.genere AND a.siglas = ag.anime)
          INNER JOIN translation_filters tf ON(tf.id_external = f.id) 
          WHERE tf.kind = 'generes' AND tf.lang = '${lang}'
        ) AS generes_code, generes_name
      FROM animes a inner join anime_generes ag
      ON(a.siglas = ag.anime)
      WHERE a.siglas = '${siglas}'`
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

const getNum = (req: Request, res: Response, next: NextFunction) => {
  let lang = req.params.lang;
  postgress
    .query(
      `SELECT l.code, tf.translation, tf.id_external 
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

const lastByGenere = (req: Request, res: Response, next: NextFunction) => {
  let lang = req.params.lang;
  postgress
    .query(
      `SELECT a.valorations, a.siglas, a.state,
        a.date_publication, a.date_finalization,
        (SELECT ta.translation 
          FROM translation_animes ta 
          ON(ta.anime = a.siglas) 
          WHERE ta.lang = ${lang} 
          AND ta.kind = 'titulo'
        ) AS titulo,
        (SELECT ma.name, ma.extension
          FROM media_animes ma 
          ON(ma.anime = a.siglas) 
          WHERE ma.type = 'portada'
        ) AS portada,
        (SELECT f.code, tf.translation FROM anime_generes ag 
          INNER JOIN filers f 
          ON(f.id = ag.genere AND a.siglas = ag.anime)
          INNER JOIN translation_filters tf ON(tf.id_external = f.id) 
          WHERE tf.lang = '${lang}'
        ) AS generes_code, generes_name
      FROM animes a inner join anime_generes ag
      ON(a.siglas = ag.anime) 
      WHERE ag.genere = (SELECT DISTINCT ON(f.code) f.code 
    FROM filters AS f 
    ON ag.generes LIKE ('%' || f.code::text || '%') 
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

const last = (req: Request, res: Response, next: NextFunction) => {
  let lang = req.params.lang;
  postgress
    .query(
      `SELECT a.valorations, a.siglas, a.state,
        a.date_publication, a.date_finalization,
        (SELECT ta.translation 
          FROM translation_animes ta 
          ON(ta.anime = a.siglas) 
          WHERE ta.lang = ${lang} 
          AND ta.kind = 'titulo'
        ) AS titulo,
        (SELECT ta.translation 
          FROM translation_animes ta 
          ON(ta.anime = a.siglas) 
          WHERE ta.lang = ${lang} 
          AND ta.kind = 'sinopsis'
        ) AS sinopsis,
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
      `SELECT l.code, tf.translation, tf.id_external 
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
  let lang = req.params.lang;
  postgress
    .query(
      `SELECT l.code, tf.translation, tf.id_external 
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

const removeFavorite = (req: Request, res: Response, next: NextFunction) => {
  let lang = req.params.lang;
  postgress
    .query(
      `SELECT l.code, tf.translation, tf.id_external 
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

const insert = (req: Request, res: Response, next: NextFunction) => {
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

  let t = "";
  temporadas.forEach((temp: String) => {
    t += temp;
  });
  postgress
    .query(
      `INSERT INTO animes (tittle, sinopsis, siglas, state, date_publication, date_finalization, idiomas, temporadas) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        titulo,
        sinopsis,
        siglas,
        state,
        date_publication,
        date_finalization,
        idiomas,
        t,
      ]
    )
    .then((result: QueryResult) => {
      console.log(result);
      let sql = "";
      generes.forEach((genere: string) => {
        sql += `INSERT INTO anime_generes (genere, anime) VALUES ('${genere}', '${siglas}');`;
      });

      postgress
        .query(sql)
        .then((r: QueryResult) => {
          console.log(r);
          saveBackupAnime(siglas, result.rows, 'animes');
          let msg = `Se ha podido obtener la traducion del idioma {lang}`;
          res.json(responseCustome(msg, 200, r.rows));
        })
        .catch((e: Error) => {
          next(e);
        });
    })
    .catch((e: Error) => {
      next(e);
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

  let t = "";
  temporadas.forEach((temp: String) => {
    t += temp;
  });
  postgress
    .query(
      `UPDATE FROM animes SET tittle = $1, sinopsis = $2, state = $3, date_publication = $4, date_finalization = $5, idiomas = $6, temporadas = $7) WHERE siglas=$8`,
      [
        titulo,
        sinopsis,
        state,
        date_publication,
        date_finalization,
        idiomas,
        t,
        siglas
      ]
    )
    .then((result: QueryResult) => {
      console.log(result);
      let sql = "";
      generes.forEach((genere: string) => {
        sql += `UPDATE FROM anime_generes genere=${genere} WHERE anime=${siglas});`;
      });

      postgress
        .query(sql)
        .then((r: QueryResult) => {
          console.log(r);
          saveBackupAnime(siglas, result.rows, 'animes');
          let msg = `Se ha podido obtener la traducion del idioma {lang}`;
          res.json(responseCustome(msg, 200, r.rows));
        })
        .catch((e: Error) => {
          next(e);
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
