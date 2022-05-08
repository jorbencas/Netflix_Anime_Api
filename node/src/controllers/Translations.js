const Translation = require("../models/Translation");

module.exports = {
  index: (req, res, next) => {
    let translations = req.body.translations.map((element) => {
      element.lang = parseInt(req.body.code);
      if (typeof element.keyword != "undefined") {
        element.translation = {
          $regex: "^" + element.keyword + "*",
          $options: "i",
        };
        delete element.keyword;
      }
      return element;
    });

    Translation.find({ $or: translations })
      .then((result) => {
        if (result) return res.json(result);
        return res.status(404).end();
      })
      .catch((err) => next(err));
  },

  newTranslation: (req, res) => {
    const newTranslation = new Translation(req.body);
    const t = newTranslation.save();
    res.status(201).json(t);
  },

  getTranslation: (req, res, next) => {
    const { TranslationId } = req.params;

    const Translation = Translation.findById(TranslationId);
    res.json(Translation);
  },

  replaceTranslation: (req, res, next) => {
    // enforce req.body to contain all fields
    const { TranslationId } = req.params;
    const newTranslation = req.body;

    // returns before Translation to update
    const result = Translation.findByIdAndUpdate(TranslationId, newTranslation);
    res.json({ success: true });
  },

  updateTranslation: (req, res, next) => {
    // req.body may contain any number of fields
    const { TranslationId } = req.params;
    const newTranslation = req.body;

    // returns before Translation to update
    const result = Translation.findByIdAndUpdate(TranslationId, newTranslation);
    res.json({ success: true });
  },
};
