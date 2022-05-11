var router = require("express").Router();
const translations = require("./api/translations");
const media = require("./api/media");
const langs = require("./api/langs");
const { responseCustome } = require("../utils");
router.use("/translation", translations);
router.use("/media", media);
router.use("/langs", langs);
router.route("/chat").post((req, res, next) => {
  console.log(req.body);
  let msg = req.body.message;
  let data = {
    message: msg,
    audio: "http//localhost:3001/notify",
  };
  res.json(responseCustome("mensage recibido", 200, data));
});
router.use((err, req, res, next) => {
  next(err);
});
module.exports = router;
