"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req) => {
    var _a;
    return ((_a = req.headers.host) === null || _a === void 0 ? void 0 : _a.includes("localhost")) ? true : false;
};
