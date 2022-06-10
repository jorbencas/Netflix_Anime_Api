"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const langs_1 = __importDefault(require("./langs"));
const animes_1 = __importDefault(require("./animes"));
// import episodes from "./episodes";
const router = (0, express_1.Router)();
router.use("/langs", langs_1.default);
router.use("/animes", animes_1.default);
// router.use("/episodes", episodes);
exports.default = router;
