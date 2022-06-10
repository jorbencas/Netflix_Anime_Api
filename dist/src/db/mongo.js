"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectMongo = () => {
    let url = `${process.env.MONGODB_URI}`;
    let options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: false,
    };
    mongoose_1.default.connect(url, options)
        .then(() => {
        console.log(`Connected to Mongo`);
    })
        .catch((err) => {
        console.error(err);
    });
};
exports.connectMongo = connectMongo;
process.on("uncaughtException", (error) => {
    console.error(error);
    mongoose_1.default.disconnect();
});
