const { responseCustome, requestLangsCustome } = require("../utils/index.js");
const { postgress } = require("../db/postgres.js");
const { index } = require("./Translations.js");

const getTittleLangs = (req, res, next) => {
  let lang = req.params.lang;
  let translations = { kind: "langs" };
  let trans = [];
  let params = requestLangsCustome(lang, translations);
  index(params)
    .then((result) => {
      result.forEach((t) => {
        let id = t.id_external;
        postgress
          .query(`SELECT code FROM langs WHERE id = ${id}`)
          .then((result) => {
            t.code = result.rows.code;
            trans.push(t);
          })
          .catch((e) => console.error(e.stack));
      });
      console.log(trans);
      let msg = `Se ha podido obtener la traducion del idioma ${lang}`;
      res.json(responseCustome(msg, 200, trans));
    })
    .catch((err) => {
      console.error(err);
      let msg = `No se ha podido obtener la traducion del idioma ${lang}`;
      res.status(500).json(responseCustome(msg, 500));
    });
};

const getcodelangs = (req, res, next) => {
  postgress
    .query("SELECT id, code FROM langs")
    .then((result) => res.json(responseCustome("", 200, result.rows)))
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  getTittleLangs,
  getcodelangs,
};
