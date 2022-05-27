var router = require("express").Router();
const translations = require("./translations.js");
const media = require("./media.js");
const langs = require("./langs.js");
router.use("/translation", translations);
router.use("/media", media);
router.use("/langs", langs);
export default router;
