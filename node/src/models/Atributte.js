var mongoose = require("mongoose");

var MediaSchema = new mongoose.Schema(
  {
    type: String,
    id_external: { type: Number, default: 0 },
    favorite: { type: Boolean, default: false },
    views: { type: Boolean, default: false },
    downloads: { type: Boolean, default: false },

    // $sql = "CREATE TABLE atributtes (
    //     id SERIAL NOT NULL PRIMARY KEY,
    //     profile int4 DEFAULT NULL,
    //     id_external int4 DEFAULT NULL
    //   );";
  },
  { timestamps: true }
);

MediaSchema.methods.toJSONFor = function () {
  return {
    type: this.type,
    name: this.name,
    extension: this.extension,
    id_external: this.id_external,
    orden: this.orden,
    main: this.main,
  };
};

module.exports = mongoose.model("media", MediaSchema);
