var mongoose = require("mongoose");
const connectMongo = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: false,
    })
    .then(() => {
      console.log(`Connected to Mongo`);
    })
    .catch((err) => {
      console.error(err);
    });
};

process.on("uncaughtException", (error) => {
  console.error(error);
  mongoose.disconnect();
});

module.exports = { connectMongo };
