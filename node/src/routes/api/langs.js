var router = require("express").Router();
const LangsController = require("../../controllers/Langs");
router.use("getTittleLangs", LangsController.getTittleLangs());
router.use("getcodelangs", LangsController.getcodelangs());
module.exports = router;
