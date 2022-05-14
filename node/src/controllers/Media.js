const Media = require("../models/Media.js");
module.exports = {
  index: (media, type, id_external) => {
    if (typeof media !== "undefined") {
      return Media.find({ $or: media });
    } else {
      return Media.findOne({
        type: `${type}`,
        id_external: id_external,
      });
    }
  },

  newMedia: (req, res) => {
    const newMedia = new Media(req.body);
    const t = newMedia.save();
    res.status(201).json(t);
  },
};
