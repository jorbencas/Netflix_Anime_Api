var router = require("express").Router();
const { getTittleLangs, getcodelangs } = require("../../controllers/Langs");
router.route("/getTittleLangs").get(getTittleLangs);
router.route("/getcodelangs").get(getcodelangs);
// router.use((err, req, res, next) => {
//   return next(err);
// });
module.exports = router;
