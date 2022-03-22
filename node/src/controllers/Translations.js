const Translation = require('../models/Translation');

module.exports = {
  index: async (req, res) => {
    let result = [];
    let translations = req.body.translations;
    for (let index = 0; index < translations.length; index++) {
      const element = translations[index];
      var s = {
        lang : parseInt(req.body.code),
        kind : `${element.kind}`
      };

      if (typeof element.keyword != 'undefined') {
        s.translation = {$regex:"^"+element.keyword+'*',$options:'i'}
      }
      if (typeof element.id_external != 'undefined') {
        s.id_external = element.id_external;
        const t = await Translation.findOne(s);
        result.push(t);
      } else {
        const t = await Translation.find(s);
        t.forEach(element => {
          result.push(element);
        });
      }
    };
    res.status(200).json(result);
  },

  newTranslation: async (req, res) => {
    const newTranslation = new Translation(req.body);
    const t = await newTranslation.save();
    res.status(201).json(t);
  },

  getTranslation: async (req, res, next) => {
    const { TranslationId } = req.params;

    const Translation = await Translation.findById(TranslationId);
    res.status(200).json(Translation);
  },

  replaceTranslation: async (req, res, next) => {
    // enforce req.body to contain all fields
    const { TranslationId } = req.params;
    const newTranslation = req.body;

    // returns before Translation to update
    const result = await Translation.findByIdAndUpdate(TranslationId, newTranslation);
    res.status(200).json({success: true});
  },

  updateTranslation: async (req, res, next) => {
    // req.body may contain any number of fields
    const { TranslationId } = req.params;
    const newTranslation = req.body;

    // returns before Translation to update
    const result = await Translation.findByIdAndUpdate(TranslationId, newTranslation);
    res.status(200).json({success: true});
  }
};