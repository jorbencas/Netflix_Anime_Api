const optionsDB = require("../configs/mongo");
var mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URI, optionsDB)
  .then(() => {
    console.log(`Connection to MongoDB successful`);
  })
  .catch((err) => {
    console.error(err);
  });

process.on("uncaughtException", (error) => {
  console.error(error);
  mongoose.disconnect();
});
