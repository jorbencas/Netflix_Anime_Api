var router = require("express").Router();
const { index, newMedia } = require("../../controllers/Media.js");
router.route("/").post((req: Request, res: Response, next: NextFunction) => {
  index(req.body.media, req.body.type, req.body.id_external)
    .then((t) => {
      if (t) return res.json(t);
      return res.status(404).end();
    })
    .catch((err) => next(err));
});
router.route("/new").post(newMedia);
// router.use((err, req: Request, res: Response, next: NextFunction) => {
//   return next(err);
// });
module.exports = router;
