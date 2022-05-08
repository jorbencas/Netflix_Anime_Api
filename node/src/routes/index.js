var router = require("express").Router();
const translations = require("./api/translations");
const media = require("./api/media");
const langs = require("./api/langs");
router.use("/translation", translations);
router.use("/media", media);
router.use("/langs", langs);
module.exports = router;
