const Translation = require("../models/Translation.js");

module.exports = {
  index: (translations) => {
    return Translation.find({ $or: translations });
  },

  newTranslation: (req, res) => {
    const newTranslation = new Translation(req.body);
    const t = newTranslation.save();
    res.status(201).json(t);
  },

  getTranslation: (req: Request, res: Response, next: NextFunction) => {
    const { TranslationId } = req.params;

    const Translation = Translation.findById(TranslationId);
    res.json(Translation);
  },

  replaceTranslation: (req: Request, res: Response, next: NextFunction) => {
    // enforce req.body to contain all fields
    const { TranslationId } = req.params;
    const newTranslation = req.body;

    // returns before Translation to update
    const result = Translation.findByIdAndUpdate(TranslationId, newTranslation);
    res.json({ success: true });
  },

  updateTranslation: (req: Request, res: Response, next: NextFunction) => {
    // req.body may contain any number of fields
    const { TranslationId } = req.params;
    const newTranslation = req.body;

    // returns before Translation to update
    const result = Translation.findByIdAndUpdate(TranslationId, newTranslation);
    res.json({ success: true });
  },
};
