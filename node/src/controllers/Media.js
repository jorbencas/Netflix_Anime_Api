const Media = require('../models/Media');

module.exports = {
  index: async (req, res) => {
    var s = {
      type : `${req.body.type}`,
      id_external : req.body.id_external
    };
    const t = await Media.findOne(s);
    res.status(200).json(t);
  },

  newMedia: async (req, res) => {
    const newMedia = new Media(req.body);
    const t = await newMedia.save();
    res.status(201).json(t);
  }
};