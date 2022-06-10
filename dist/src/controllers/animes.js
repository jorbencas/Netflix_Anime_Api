"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFavorite = exports.addFavorite = exports.getFavorite = exports.lastByGenere = exports.last = exports.getNum = exports.getOne = exports.getslides = exports.getlist = void 0;
const index_1 = __importDefault(require("../utils/index"));
const postgres_1 = require("../db/postgres");
const getlist = (req, res) => {
    let lang = req.params.lang;
    postgres_1.postgress
        .query(`SELECT a.valorations, a.siglas, a.state, a.temporada, 
        a.date_publication, a.date_finalization, a.kind, 
        (SELECT ta.translation 
          FROM translation_animes ta 
          ON(ta.anime = a.siglas) 
          WHERE ta.lang = ${lang} 
          AND ta.kind = 'titulo'
        ) AS titulo
      FROM animes a
      WHERE a.created IS NOT NULL `)
        .then((result) => {
        console.log(result);
        let msg = `Se ha podido obtener la traducion del idioma {lang}`;
        res.json((0, index_1.default)(msg, 200, result.rows));
    })
        .catch((e) => {
        let msg = `No se ha podido obtener la traducion del idioma {lang}`;
        res.status(500).json((0, index_1.default)(msg, 500, e.stack));
    });
};
exports.getlist = getlist;
const getslides = (req, res) => {
    let lang = req.params.lang;
    let first = req.params.first;
    let last = req.params.last;
    postgres_1.postgress
        .query(`SELECT a.valorations, a.siglas, a.state, a.temporada, 
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
      OFFSET ${first} LIMIT ${last}`)
        .then((result) => {
        console.log(result);
        let msg = `Se ha podido obtener la traducion del idioma {lang}`;
        res.json((0, index_1.default)(msg, 200, result.rows));
    })
        .catch((e) => {
        let msg = `No se ha podido obtener la traducion del idioma {lang}`;
        res.status(500).json((0, index_1.default)(msg, 500, e.stack));
    });
};
exports.getslides = getslides;
const getOne = (req, res) => {
    let lang = req.params.lang;
    let siglas = req.params.siglas;
    postgres_1.postgress
        .query(`SELECT a.valorations, a.siglas, a.state, a.temporada, 
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
      WHERE a.siglas = '${siglas}'`)
        .then((result) => {
        console.log(result);
        let msg = `Se ha podido obtener la traducion del idioma {lang}`;
        res.json((0, index_1.default)(msg, 200, result.rows));
    })
        .catch((e) => {
        let msg = `No se ha podido obtener la traducion del idioma {lang}`;
        res.status(500).json((0, index_1.default)(msg, 500, e.stack));
    });
};
exports.getOne = getOne;
const getNum = (req, res) => {
    let lang = req.params.lang;
    postgres_1.postgress
        .query(`SELECT l.code, tf.translation, tf.id_external 
    FROM langs l inner join translation_filter tf
    ON(l.id = tf.id_external) 
    WHERE l.code = ${lang} AND tf.kind = 'langs'`)
        .then((result) => {
        console.log(result);
        let msg = `Se ha podido obtener la traducion del idioma {lang}`;
        res.json((0, index_1.default)(msg, 200, result.rows));
    })
        .catch((e) => {
        let msg = `No se ha podido obtener la traducion del idioma {lang}`;
        res.status(500).json((0, index_1.default)(msg, 500, e.stack));
    });
};
exports.getNum = getNum;
const lastByGenere = (req, res) => {
    let lang = req.params.lang;
    postgres_1.postgress
        .query(`SELECT a.valorations, a.siglas, a.state,
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
    WHERE f.kind = 'generes')`)
        .then((result) => {
        console.log(result);
        let msg = `Se ha podido obtener la traducion del idioma {lang}`;
        res.json((0, index_1.default)(msg, 200, result.rows));
    })
        .catch((e) => {
        let msg = `No se ha podido obtener la traducion del idioma {lang}`;
        res.status(500).json((0, index_1.default)(msg, 500, e.stack));
    });
};
exports.lastByGenere = lastByGenere;
const last = (req, res) => {
    let lang = req.params.lang;
    postgres_1.postgress
        .query(`SELECT a.valorations, a.siglas, a.state,
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
      WHERE a.created IS NOT NULL`)
        .then((result) => {
        console.log(result);
        let msg = `Se ha podido obtener la traducion del idioma {lang}`;
        res.json((0, index_1.default)(msg, 200, result.rows));
    })
        .catch((e) => {
        let msg = `No se ha podido obtener la traducion del idioma {lang}`;
        res.status(500).json((0, index_1.default)(msg, 500, e.stack));
    });
};
exports.last = last;
const getFavorite = (req, res) => {
    let lang = req.params.lang;
    postgres_1.postgress
        .query(`SELECT l.code, tf.translation, tf.id_external 
    FROM langs l inner join translation_filter tf
    ON(l.id = tf.id_external) 
    WHERE l.code = ${lang} AND tf.kind = 'langs'`)
        .then((result) => {
        console.log(result);
        let msg = `Se ha podido obtener la traducion del idioma {lang}`;
        res.json((0, index_1.default)(msg, 200, result.rows));
    })
        .catch((e) => {
        let msg = `No se ha podido obtener la traducion del idioma {lang}`;
        res.status(500).json((0, index_1.default)(msg, 500, e.stack));
    });
};
exports.getFavorite = getFavorite;
const addFavorite = (req, res) => {
    let lang = req.params.lang;
    postgres_1.postgress
        .query(`SELECT l.code, tf.translation, tf.id_external 
    FROM langs l inner join translation_filter tf
    ON(l.id = tf.id_external) 
    WHERE l.code = ${lang} AND tf.kind = 'langs'`)
        .then((result) => {
        console.log(result);
        let msg = `Se ha podido obtener la traducion del idioma {lang}`;
        res.json((0, index_1.default)(msg, 200, result.rows));
    })
        .catch((e) => {
        let msg = `No se ha podido obtener la traducion del idioma {lang}`;
        res.status(500).json((0, index_1.default)(msg, 500, e.stack));
    });
};
exports.addFavorite = addFavorite;
const removeFavorite = (req, res) => {
    let lang = req.params.lang;
    postgres_1.postgress
        .query(`SELECT l.code, tf.translation, tf.id_external 
        FROM langs l inner join translation_filter tf
        ON(l.id = tf.id_external) 
        WHERE l.code = ${lang} AND tf.kind = 'langs'`)
        .then((result) => {
        console.log(result);
        let msg = `Se ha podido obtener la traducion del idioma {lang}`;
        res.json((0, index_1.default)(msg, 200, result.rows));
    })
        .catch((e) => {
        let msg = `No se ha podido obtener la traducion del idioma {lang}`;
        res.status(500).json((0, index_1.default)(msg, 500, e.stack));
    });
};
exports.removeFavorite = removeFavorite;
