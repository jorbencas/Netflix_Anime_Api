const Media = require('../models/Media');

module.exports = {
  index: async (req, res) => {
    if(typeof req.body.media != 'undefined'){
      let result = [];
      let media = req.body.media;
      for (let index = 0; index < media.length; index++) {
        const t = await Media.findOne({
          type : `${media[index].type}`,
          id_external : media[index].id_external
        });
        result.push(t);
      };
      res.status(200).json(result);
    } else {
      const t = await Media.findOne({
        type : `${req.body.type}`,
        id_external : req.body.id_external
      });
      res.status(200).json(t);
    }
  },

  newMedia: async (req, res) => {
    const newMedia = new Media(req.body);
    const t = await newMedia.save();
    res.status(201).json(t);
  }
};