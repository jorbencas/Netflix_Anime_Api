var router = require("express").Router();
const { postgress } = require("./db/postgres.js");
router.get("/pg", (req, res, next) => {
  postgress
    .query("SELECT * FROM animes")
    .then((result) => res.json(responseCustome("", 200, result.rows)))
    .catch((e) => console.error(e.stack))
    .then(() => postgress.end());
});
module.exports = router;
