var router = require("express").Router();
const { index, newMedia } = require("../../controllers/Media.js");
router.route("/").post((req, res, next) => {
  if (typeof req.body.media != "undefined") {
    index(req.body.media).then((t) => {
      if (t) return res.json(t);
      return res.status(404).end();
    });
  } else {
    index(null, req.body.type, req.body.id_external)
      .then((t) => {
        if (t) return res.json(t);
        return res.status(404).end();
      })
      .catch((err) => next(err));
  }
});
router.route("/new").post(newMedia);
// router.use((err, req, res, next) => {
//   return next(err);
// });
module.exports = router;
