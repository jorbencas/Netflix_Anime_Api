const router = require('express-promise-router')();

const TranslationsController = require('../controllers/Translations');

router.route('/translation').post(TranslationsController.index)

router.route('/translation/new').post(TranslationsController.newTranslation);

router.route('/translation/:TranslationId')
  .get(TranslationsController.getTranslation)
  .put(TranslationsController.replaceTranslation)
  .patch(TranslationsController.updateTranslation)


const MediaController = require('../controllers/Media');

router.route('/media').post(MediaController.index)

router.route('/media/new').post(MediaController.newMedia);

module.exports = router;
