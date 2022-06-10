"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Filters_1 = require("../../controllers/Filters");
const router = (0, express_1.Router)();
router.get("/:lang/:kind", Filters_1.getFilters);
exports.default = router;
