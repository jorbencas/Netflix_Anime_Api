require("dotenv").config();
const path = require("node:path");
const fs = require("node:fs");
console.log(process.env.MEDIA_PATH);
// let fileName = path.join(
//   __dirname,
//   "/../" + process.env.MEDIA_PATH + "/../dudas/KNY/episodes"
// );

let fileName = path.join(
  __dirname,
  "/../" + process.env.MEDIA_PATH + "/../dudas/*/episodes"
);

var regex = /(\d+)/g;
fs.readdir(fileName, (err, files) => {
  if (!err) {
    files.forEach((fileName, i) => {
      if (i + 1 < files.length) {
        console.log(fileName);
        console.log(fileName.match(regex));
      }
    });
  } else console.log(err);
});

// fs.access(fileName, "r", (err) => {
//   if (!err) fs.createReadStream(fileName).pipe(res);
//   else next(err);
// });
