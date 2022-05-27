import mongoose, { ConnectionOptions } from "mongoose";

const connectMongo = () => {
  let url:string = `${process.env.MONGODB_URI}`;
  let options: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: false,
  };
  mongoose.connect(url, options)
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

export { connectMongo };
