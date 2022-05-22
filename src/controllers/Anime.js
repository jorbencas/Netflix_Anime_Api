const { responseCustome } = require("../utils/index.js");
const { postgress } = require("../db/postgres.js");

const getlistanime = (req, res, next) => {
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
      console.log(trans);
      let msg = `Se ha podido obtener la traducion del idioma ${lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      console.error(e.stack);
      let msg = `No se ha podido obtener la traducion del idioma ${lang}`;
      res.status(500).json(responseCustome(msg, 500));
    });
};

const getslides = (req, res, next) => {
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
        ) AS generes
      FROM animes a inner join
      OFFSET ${first} LIMIT ${last}`
    )
    .then((result) => {
      console.log(trans);
      let msg = `Se ha podido obtener la traducion del idioma ${lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      console.error(e.stack);

      let msg = `No se ha podido obtener la traducion del idioma ${lang}`;
      res.status(500).json(responseCustome(msg, 500));
    });
};

const getone = (req, res, next) => {
  let lang = req.params.lang;
  let siglas = req.params.siglas;
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
        ) AS generes
      FROM animes a inner join anime_generes ag
      ON(a.siglas = ag.anime)
      WHERE a.siglas = '${siglas}'`
    )
    .then((result) => {
      console.log(trans);


      let res = 
      let msg = `Se ha podido obtener la traducion del idioma ${lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      console.error(e.stack);
      let msg = `No se ha podido obtener la traducion del idioma ${lang}`;
      res.status(500).json(responseCustome(msg, 500));
    });
};

const getFiltersByCode = (req, res, next) => {
  let lang = req.params.lang;
  postgress
    .query(
      `SELECT l.code, tf.translation, tf.id_external 
    FROM langs l inner join translation_filter tf
    ON(l.id = tf.id_external) 
    WHERE l.code = ${lang} AND tf.kind = 'langs'`
    )
    .then((result) => {
      console.log(trans);
      let msg = `Se ha podido obtener la traducion del idioma ${lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      console.error(e.stack);

      let msg = `No se ha podido obtener la traducion del idioma ${lang}`;
      res.status(500).json(responseCustome(msg, 500));
    });
};

const getnumanimes = (req, res, next) => {
  let lang = req.params.lang;
  postgress
    .query(
      `SELECT l.code, tf.translation, tf.id_external 
    FROM langs l inner join translation_filter tf
    ON(l.id = tf.id_external) 
    WHERE l.code = ${lang} AND tf.kind = 'langs'`
    )
    .then((result) => {
      console.log(trans);
      let msg = `Se ha podido obtener la traducion del idioma ${lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      console.error(e.stack);

      let msg = `No se ha podido obtener la traducion del idioma ${lang}`;
      res.status(500).json(responseCustome(msg, 500));
    });
};

const lastanimes = (req, res, next) => {
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
      
      WHERE a.created IS NOT NULL `
    )
    .then((result) => {
      console.log(trans);
      let msg = `Se ha podido obtener la traducion del idioma ${lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      console.error(e.stack);

      let msg = `No se ha podido obtener la traducion del idioma ${lang}`;
      res.status(500).json(responseCustome(msg, 500));
    });
};

const getfav = (req, res, next) => {
  let lang = req.params.lang;
  postgress
    .query(
      `SELECT l.code, tf.translation, tf.id_external 
    FROM langs l inner join translation_filter tf
    ON(l.id = tf.id_external) 
    WHERE l.code = ${lang} AND tf.kind = 'langs'`
    )
    .then((result) => {
      console.log(trans);
      let msg = `Se ha podido obtener la traducion del idioma ${lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      console.error(e.stack);

      let msg = `No se ha podido obtener la traducion del idioma ${lang}`;
      res.status(500).json(responseCustome(msg, 500));
    });
};

const addFavorite = (req, res, next) => {
  let lang = req.params.lang;
  postgress
    .query(
      `SELECT l.code, tf.translation, tf.id_external 
    FROM langs l inner join translation_filter tf
    ON(l.id = tf.id_external) 
    WHERE l.code = ${lang} AND tf.kind = 'langs'`
    )
    .then((result) => {
      console.log(trans);
      let msg = `Se ha podido obtener la traducion del idioma ${lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      console.error(e.stack);

      let msg = `No se ha podido obtener la traducion del idioma ${lang}`;
      res.status(500).json(responseCustome(msg, 500));
    });
};

const removeFavorite = (req, res, next) => {
  let lang = req.params.lang;
  postgress
    .query(
      `SELECT l.code, tf.translation, tf.id_external 
        FROM langs l inner join translation_filter tf
        ON(l.id = tf.id_external) 
        WHERE l.code = ${lang} AND tf.kind = 'langs'`
    )
    .then((result) => {
      console.log(trans);
      let msg = `Se ha podido obtener la traducion del idioma ${lang}`;
      res.json(responseCustome(msg, 200, result.rows));
    })
    .catch((e) => {
      console.error(e.stack);

      let msg = `No se ha podido obtener la traducion del idioma ${lang}`;
      res.status(500).json(responseCustome(msg, 500));
    });
};

module.exports = {
  getTittleLangs,
  getcodelangs,
};
