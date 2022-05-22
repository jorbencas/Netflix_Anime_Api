var router = require("express").Router();
const { getTittleLangs, getcodelangs } = require("../../controllers/Langs.js");
router.route("/:lang").get(getTittleLangs);
router.route("/").get(getcodelangs);
module.exports = router;
