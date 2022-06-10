"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const node_fs_1 = require("node:fs");
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get("/:anime/:episode", (req, res, next) => {
    res.writeHead(200, { "content-type": "video/mp4" });
    let anime = typeof req.params.anime === 'undefined' ? "CY" : req.params.anime;
    let kind = "banner";
    let episode = typeof req.params.episode === 'undefined' ? "02.webm" : req.params.episode;
    const PATH_TO_FILES = "/../../" + process.env.MEDIA_PATH;
    let fileName = node_path_1.default.join(__dirname, PATH_TO_FILES + node_path_1.default.sep + anime + node_path_1.default.sep + kind + node_path_1.default.sep + episode);
    (0, node_fs_1.access)(fileName, 7, (err) => {
        if (!err)
            (0, node_fs_1.createReadStream)(fileName).pipe(res);
        else
            next(err);
    });
});
exports.default = router;
