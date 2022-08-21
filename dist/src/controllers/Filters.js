"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilters = exports.deletesearch = exports.mysearches = exports.updatesearchuser = exports.handlesearch = void 0;
const index_1 = __importDefault(require("@utils/index"));
const postgres_1 = require("@db/postgres");
const getFilters = (req, res) => {
    let kind = req.params.kind;
    if (kind == 'years') {
        let r = ['1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];
        let msg = `Se ha podido obtener la traducion del idioma {lang}`;
        res.json((0, index_1.default)(msg, 200, r));
    }
    else if (kind == 'letters') {
        let r = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0-9'];
        let msg = `Se ha podido obtener la traducion del idioma {lang}`;
        res.json((0, index_1.default)(msg, 200, r));
    }
    else {
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
    }
};
exports.getFilters = getFilters;
const handlesearch = (req, res) => {
};
exports.handlesearch = handlesearch;
const mysearches = (req, res) => {
};
exports.mysearches = mysearches;
const updatesearchuser = (req, res) => {
};
exports.updatesearchuser = updatesearchuser;
const deletesearch = (req, res) => {
};
exports.deletesearch = deletesearch;
