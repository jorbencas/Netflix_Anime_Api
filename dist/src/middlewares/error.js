"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../utils/index"));
exports.default = (err, _req, res) => {
    const error = process.env.NODE_ENV === "dev" ? err.message : "";
    let status = parseInt(`${err.stack}`) || 500;
    if (err.name === "ValidationError") {
        status = 422;
        res.status(status).json((0, index_1.default)(error, status, err));
    }
    else {
        res.status(status).json((0, index_1.default)(error, status));
    }
};
