import responseCustome from "@utils/index";
import { postgress } from "@db/postgres";
import { Request, Response } from 'express';

const getlist = (req: Request, res: Response) => {
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
    .then((result) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      let msg = `No se ha podido obtener la traducion del idioma {lang}`;
      res.status(500).json(responseCustome(msg, 500, e.stack));
    });
};

const getslides = (req: Request, res: Response) => {
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
    .then((result) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      let msg = `No se ha podido obtener la traducion del idioma {lang}`;
      res.status(500).json(responseCustome(msg, 500, e.stack));
    });
};

const getOne = (req: Request, res: Response) => {
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
    .then((result) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      let msg = `No se ha podido obtener la traducion del idioma {lang}`;
      res.status(500).json(responseCustome(msg, 500, e.stack));
    });
};

const getNum = (req: Request, res: Response) => {
  let lang = req.params.lang;
  postgress
    .query(
      `SELECT l.code, tf.translation, tf.id_external 
    FROM langs l inner join translation_filter tf
    ON(l.id = tf.id_external) 
    WHERE l.code = ${lang} AND tf.kind = 'langs'`
    )
    .then((result) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      let msg = `No se ha podido obtener la traducion del idioma {lang}`;
      res.status(500).json(responseCustome(msg, 500, e.stack));
    });
};

const lastByGenere = (req: Request, res: Response) => {
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
    .then((result) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      let msg = `No se ha podido obtener la traducion del idioma {lang}`;
      res.status(500).json(responseCustome(msg, 500, e.stack));
    });
};

const last = (req: Request, res: Response) => {
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
    .then((result) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      let msg = `No se ha podido obtener la traducion del idioma {lang}`;
      res.status(500).json(responseCustome(msg, 500, e.stack));
    });
};

const getFavorite = (req: Request, res: Response) => {
  let lang = req.params.lang;
  postgress
    .query(
      `SELECT l.code, tf.translation, tf.id_external 
    FROM langs l inner join translation_filter tf
    ON(l.id = tf.id_external) 
    WHERE l.code = ${lang} AND tf.kind = 'langs'`
    )
    .then((result) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      let msg = `No se ha podido obtener la traducion del idioma {lang}`;
      res.status(500).json(responseCustome(msg, 500, e.stack));
    });
};

const addFavorite = (req: Request, res: Response) => {
  let lang = req.params.lang;
  postgress
    .query(
      `SELECT l.code, tf.translation, tf.id_external 
    FROM langs l inner join translation_filter tf
    ON(l.id = tf.id_external) 
    WHERE l.code = ${lang} AND tf.kind = 'langs'`
    )
    .then((result) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      let msg = `No se ha podido obtener la traducion del idioma {lang}`;
      res.status(500).json(responseCustome(msg, 500, e.stack));
    });
};

const removeFavorite = (req: Request, res: Response) => {
  let lang = req.params.lang;
  postgress
    .query(
      `SELECT l.code, tf.translation, tf.id_external 
        FROM langs l inner join translation_filter tf
        ON(l.id = tf.id_external) 
        WHERE l.code = ${lang} AND tf.kind = 'langs'`
    )
    .then((result) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      let msg = `No se ha podido obtener la traducion del idioma {lang}`;
      res.status(500).json(responseCustome(msg, 500, e.stack));
    });
};

const insert = (req: Request, res: Response) => {
  //let lang = req.params.lang;
  postgress
    .query( `INSERT INTO animes (siglas, state, date_publication, date_finalization) VALUES ('${req.body.siglas}', '${req.body.state}', '${req.body.date_publication}', '${req.body.date_finalization}')`)
    .then((result) => {
      console.log(result);
      let msg = `Se ha podido obtener la traducion del idioma {lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      let msg = `No se ha podido obtener la traducion del idioma {lang}`;
      res.status(500).json(responseCustome(msg, 500, e.stack));
    });
}

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
};
