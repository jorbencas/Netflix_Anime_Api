const Translation = require("../models/Translation");

module.exports = {
  index: (translations) => {
    return Translation.find({ $or: translations });
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
