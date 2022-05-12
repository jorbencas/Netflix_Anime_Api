var router = require("express").Router();
const { getTittleLangs, getcodelangs } = require("../../controllers/Langs.js");
router.route("/getTittleLangs").get(getTittleLangs);
router.route("/getcodelangs").get(getcodelangs);
module.exports = router;
