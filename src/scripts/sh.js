require("dotenv").config();
const path = require("node:path");
const fs = require("node:fs");
// let fileName = path.join(
//   __dirname,
//   "/../" + MEDIA_PATH + "/../dudas/KNY/episodes"
// );

let fileName = path.join(
  __dirname,
  "/../" + MEDIA_PATH + "/../dudas/"
);

function getFiles(dir) {
  var regex = /(\d+)/g;

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((item) => {
      if (item.isDirectory()) getFiles(path.join(dir, item.name));
    })
    .map((item) => {
      console.log(item.name.match(regex));
      item.name;
    });
}

console.log(getFiles(fileName));

// fs.access(fileName, "r", (err) => {
//   if (!err) fs.createReadStream(fileName).pipe(res);
//   else next(err);
// });

function generateEscelFromDB() {
  var fs = require("fs");
  var xlsx = require("node-xlsx");
  var data = [
    [1, 2, 3],
    [true, false, null, "sheetjs"],
    ["foo", "bar", new Date("2014-02-19T14:30Z"), "0.3"],
    ["baz", null, "qux"],
  ];
  var buffer = xlsx.build([{ name: "mySheetName", data: data }]); // Returns a buffer
  fs.writeFileSync("myBuffer.xlsx", buffer);
}
