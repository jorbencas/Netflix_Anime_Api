"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../utils/index"));
exports.default = (_req, res) => {
    let status = 404;
    res.status(status).json((0, index_1.default)("Endpoint Not found", status)).end();
};
