var mongoose = require('mongoose');

var MediaSchema = new mongoose.Schema({
  type:String,
  name:String,
  extension:String,
  id_external:Number,
  orden:{ type:Number, default:0 }, 
  main:{ type:Boolean, default:false },
}, {timestamps: true});


MediaSchema.methods.toJSONFor = function(){
  return {
    type:this.type,
    name:this.name,
    extension:this.extension,
    id_external:this.id_external,
    orden:this.orden, 
    main:this.main,
  };
};

module.exports = mongoose.model('media', MediaSchema);