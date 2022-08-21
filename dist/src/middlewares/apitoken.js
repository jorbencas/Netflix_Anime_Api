"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("@utils/index"));
const isLocalHost_1 = __importDefault(require("./isLocalHost"));
exports.default = (req, res, next) => {
    if (!(0, isLocalHost_1.default)(req) &&
        (typeof req.headers.api_token == "undefined" ||
            req.headers.api_token == process.env.API_TOKEN)) {
        let message = `No estas autorizado para utilizar la api de cosas de anime`;
        let status = 401;
        res.status(status).json((0, index_1.default)(message, status)).end();
    }
    else {
        next();
    }
};
