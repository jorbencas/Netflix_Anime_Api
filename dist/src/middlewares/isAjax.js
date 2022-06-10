"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req) => {
    return !req.accepts("html") || req.xhr ? true : false;
};
