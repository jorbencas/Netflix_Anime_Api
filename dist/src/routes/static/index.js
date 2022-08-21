"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const node_fs_1 = require("node:fs");
const express_1 = __importDefault(require("express"));
const banner_1 = __importDefault(require("./banner"));
const episodes_1 = __importDefault(require("./episodes"));
const endings_1 = __importDefault(require("./endings"));
const openings_1 = __importDefault(require("./openings"));
const portada_1 = __importDefault(require("./portada"));
var router = express_1.default.Router();
router.use("/banner", banner_1.default);
router.use("/endings", endings_1.default);
router.use("/episodes", episodes_1.default);
router.use("/openings", openings_1.default);
router.use("/portada", portada_1.default);
router.use("/chat", express_1.default.static(node_path_1.default.join(__dirname, "../../static/chat.html")));
router.get("/chat-leat", (_req, res, next) => {
    res.writeHead(200, { "content-type": "video/mp4" });
    let fileName = node_path_1.default.join(__dirname, "../../static/notifications/notification.mp3");
    if ((0, node_fs_1.existsSync)(fileName)) {
        (0, node_fs_1.access)(fileName, 7, (err) => {
            if (!err)
                (0, node_fs_1.createReadStream)(fileName).pipe(res);
            else
                next(new Error("File not found"));
        });
    }
    else {
        next(new Error("File not found"));
    }
});
router.get("/notify-send", (_req, res, next) => {
    res.writeHead(200, { "content-type": "video/mp3" });
    let fileName = node_path_1.default.join(__dirname, "../../static/notifications/send.mp3");
    if ((0, node_fs_1.existsSync)(fileName)) {
        (0, node_fs_1.access)(fileName, 7, (err) => {
            if (!err)
                (0, node_fs_1.createReadStream)(fileName).pipe(res);
            else
                next(new Error("File not found"));
        });
    }
    else {
        next(new Error("File not found"));
    }
});
router.get("/notify", (_req, res, next) => {
    res.writeHead(200, { "content-type": "audio/mp3" });
    let fileName = node_path_1.default.join(__dirname, "../../static/notifications/recibe.mp3");
    if ((0, node_fs_1.existsSync)(fileName)) {
        (0, node_fs_1.access)(fileName, 7, (err) => {
            if (!err)
                (0, node_fs_1.createReadStream)(fileName).pipe(res);
            else
                next(new Error("File not found"));
        });
    }
    else {
        next(new Error("File not found"));
    }
});
exports.default = router;
