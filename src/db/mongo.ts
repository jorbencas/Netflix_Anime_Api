import {ConnectionOptions, disconnect, connect } from "mongoose";
import { MONGODB_URI } from "../config";

const connectMongo = () => {
  let options: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: false,
  };
  connect(MONGODB_URI, options)
    .then(() => {
      console.log(`Connected to Mongo`);
    })
    .catch((err) => {
      console.error(err);
    });
};

process.on("uncaughtException", (error: Error) => {
  console.error(error);
  disconnect();
});

export { connectMongo };
