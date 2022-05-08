var router = require("express").Router();
const MediaController = require("../../controllers/Media");
router.route("/").post(MediaController.index);
router.route("/new").post(MediaController.newMedia);
module.exports = router;
