const Media = require("../models/Media");
/**
 * const path = require("path");
// static files
// app.use("/static", express.static(path.join(__dirname, "/static")));
app.use(
  "/media",
  express.static(path.join(__dirname, process.env.MEDIA_PATH + "/CY/openings"))
);

 */
module.exports = {
  index: (req, res, next) => {
    if (typeof req.body.media != "undefined") {
      Media.find({ $or: req.body.media }).then((t) => {
        if (t) return res.json(t);
        return res.status(404).end();
      });
    } else {
      Media.findOne({
        type: `${req.body.type}`,
        id_external: req.body.id_external,
      })
        .then((t) => {
          if (t) return res.json(t);
          return res.status(404).end();
        })
        .catch((err) => next(err));
    }
  },

  newMedia: (req, res) => {
    const newMedia = new Media(req.body);
    const t = newMedia.save();
    res.status(201).json(t);
  },
};
