var mongoose = require('mongoose');

var TranslationSchema = new mongoose.Schema({
  translation:String,
  kind:String,
  lang:Number,
  id_external:Number
}, {timestamps: true});


TranslationSchema.methods.toJSONFor = function(){
  return {
    translation:this.translation,
    kind:this.kind,
    lang:this.lang,
    id_external:this.id_external
  };
};

module.exports = mongoose.model('translations', TranslationSchema);