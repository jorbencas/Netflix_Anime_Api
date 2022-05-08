var mongoose = require("mongoose");

var MediaSchema = new mongoose.Schema(
  {
    type: String,
    name: String,
    extension: String,
    id_external: Number,
    orden: { type: Number, default: 0 },
    main: { type: Boolean, default: false },
  },
  { timestamps: true }
);

MediaSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    //returnedObject.id = returnedObject._id;
    delete returnedObject.id_external;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.createdAt;
    delete returnedObject.updatedAt;
  },
});
module.exports = mongoose.model("media", MediaSchema);
