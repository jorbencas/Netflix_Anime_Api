var mongoose = require("mongoose");

var TranslationSchema = new mongoose.Schema(
  {
    translation: String,
    kind: String,
    lang: Number,
    id_external: Number,
  },
  { timestamps: true }
);

TranslationSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    //returnedObject.id = returnedObject._id;
    delete returnedObject.lang;
    // delete returnedObject.id_external;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.createdAt;
    delete returnedObject.updatedAt;
  },
});

module.exports = mongoose.model("translations", TranslationSchema);
