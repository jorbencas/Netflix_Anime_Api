"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCode = exports.getTittle = void 0;
const index_1 = __importDefault(require("@utils/index"));
const postgres_1 = require("@db/postgres");
const getTittle = (req, res) => {
    let lang = req.params.lang;
    res.json((0, index_1.default)("Ok", 200, [{
            translation: "Ingles",
            id_external: 1,
            code: "en",
            lang
        },
        {
            translation: "Valenciano",
            id_external: 2,
            code: "va",
            lang
        },
        {
            translation: "Castellano",
            id_external: 3,
            code: "es",
            lang
        }]));
    // postgress
    //   .query(
    //     `SELECT l.code, tf.translation, tf.id_external 
    //     FROM langs l inner join translation_filter tf
    //     ON(l.id = tf.id_external) 
    //     WHERE l.code = ${lang} AND tf.kind = 'langs'`
    //   )
    //   .then((result) => {
    //     console.log(result);
    //     let msg = `Se ha podido obtener la traducion del idioma {lang}`;
    //     res.json(responseCustome(msg, 200, result.rows));
    //   })
    //   .catch((e) => {
    //     console.error(e.stack);
    //     let msg = `No se ha podido obtener la traducion del idioma {lang}`;
    //     res.status(500).json(responseCustome(msg, 500));
    //   });
};
exports.getTittle = getTittle;
const getCode = (_req, res, next) => {
    postgres_1.postgress
        .query("SELECT id, code FROM langs")
        .then((result) => res.json((0, index_1.default)("", 200, result.rows)))
        .catch((err) => {
        next(err);
    });
};
exports.getCode = getCode;
