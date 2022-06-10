"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const node_path_1 = __importDefault(require("node:path"));
const node_fs_1 = __importDefault(require("node:fs"));
// let fileName = path.join(
//   __dirname,
//   "/../" + process.env.MEDIA_PATH + "/../dudas/KNY/episodes"
// );
let fileName = node_path_1.default.join(__dirname, "/../" + process.env.MEDIA_PATH + "/../dudas/");
function getFiles(dir) {
    var regex = /(\d+)/g;
    return node_fs_1.default.readdirSync(dir, { withFileTypes: true })
        .filter(item => !item.isDirectory())
        .map(item => {
        console.log(item.name.match(regex));
        item.name;
    });
}
console.log(getFiles(fileName));
// fs.access(fileName, "r", (err) => {
//   if (!err) fs.createReadStream(fileName).pipe(res);
//   else next(err);
// });
