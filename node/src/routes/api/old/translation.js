var router = require('express').Router();
var mongoose = require('mongoose');
var Translation = mongoose.model('Translation');

console.log('Translation');
// return a list of tags
router.get('/', function(req, res, next) {
  //console.log(Translation.find());
  Translation.find().then(function(translation){
    console.log(translation);
    return res.json({translation: translation});
  }).catch(next);
});

router.post('/insert', function(req, res, next) {
  //console.log(Translation.find());
  Translation.find().then(function(translation){
    console.log(translation);
    return res.json({translation: translation});
  }).catch(next);
});

router.post('/:id', function(req, res, next) {
  console.log('Getid' + req.params.id);
  Translation.find({ _id: req.params.id}).then(function (translation) {
      return res.json({translation: translation});
  }).catch(next);
});

router.get('/:type', function(req, res, next) {
  console.log('hola');
  Translation.find({ type: req.params.type}).then(function (translation) {
      return res.json({translation: translation});
  }).catch(next);
});

module.exports = router;
