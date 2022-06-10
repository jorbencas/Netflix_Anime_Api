"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const langs_1 = require("../../controllers/langs");
router.get("/:lang", langs_1.getTittle);
router.get("/", langs_1.getCode);
exports.default = router;
