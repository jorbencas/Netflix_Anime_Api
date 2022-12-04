import {ConnectionOptions, disconnect, connect } from "mongoose";

const connectMongo = () => {
  let url:string = `${process.env.MONGODB_URI}`;
  let options: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: false,
  };
  connect(url, options)
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
