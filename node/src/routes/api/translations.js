var router = require("express").Router();
const TranslationsController = require("../../controllers/Translations");
router.route("/").post(TranslationsController.index);
router.route("/new").post(TranslationsController.newTranslation);
router
  .route("/:TranslationId")
  .get(TranslationsController.getTranslation)
  .put(TranslationsController.replaceTranslation)
  .patch(TranslationsController.updateTranslation);
module.exports = router;
