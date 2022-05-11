const { responseCustome } = require("../utils/index");
const postgres = require("../db/postgres");
const getTittleLangs = (req, res, next) => {
  // let translations = req.body.translations.map(() => {
  // });
  // postgres
  //   .query(`SELECT code FROM langs WHERE id = ${id_external}`)
  //   .then((result) => res.json({ data: result.rows }))
  //   .catch((e) => console.error(e.stack));
};

const getcodelangs = (req, res, next) => {
  postgres
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
