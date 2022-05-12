var router = require("express").Router();
const { index, newTranslation } = require("../../controllers/Translations.js");
router.route("/").post((req, res, next) => {
  let translations = req.body.translations.map((element) => {
    element.lang = parseInt(req.body.code);
    if (typeof element.keyword != "undefined") {
      element.translation = {
        $regex: "^" + element.keyword + "*",
        $options: "i",
      };
      delete element.keyword;
    }
    return element;
  });

  index(translations)
    .then((result) => {
      if (result) return res.json(result);
      return res.status(404).end();
    })
    .catch((err) => next(err));
});
router.route("/new").post(newTranslation);
// router
//   .route("/:TranslationId")
//   .get(getTranslation)
//   .put(replaceTranslation)
//   .patch(updateTranslation);
router.use((err, req, res, next) => {
  next(err);
});
module.exports = router;
