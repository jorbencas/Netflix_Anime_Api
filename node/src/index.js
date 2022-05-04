const morgan = require("morgan");
var mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const errorhandler = require("errorhandler");
//initialicing package
const app = express();
const path = require("path");
const http = require("http").createServer(app);
let io = require("socket.io")(http, {
  cors: {
    origins: ["http://localhost:" + process.env.PORT],
  },
});
app.use(express.json());

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(errorhandler());

// static files
app.use("/static", express.static(path.join(__dirname, "static")));

// sockets
const sockets = require("./socketIo");
sockets(io);
app.get("/onlineusers", (req, res) => {
  res.send(io.sockets.adapter.rooms);
});

app.get("*", (req, res, next) => {
  console.debug(req.hostname);
  if (typeof req.headers.api_token === "undefined") {
    res.status(404).json({
      error: {
        message: `No estas autorizado para utilizar la api de node`,
      },
    });
  } else {
    next();
  }
});

//routes
app.use(require("./routes"));
// Catch 404 Errors
const err = new Error("not Found");
app.use((req, res, next) => {
  err.status = 404;
  next(err);
});

// Error hanlder function
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;

  res.status(status).json({
    error: {
      message: error.message,
    },
  });
});

//config server
app.set("port", process.env.PORT);
let port = app.get("port");
http.listen(port, () => {
  console.log(`El servidor esta corriendo ${port}`);
  // conexión a mongodb
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("Connection to DB successful");
    })
    .catch((err) => {
      console.error(err);
    });

  process.on("uncaughtException", (error) => {
    console.error(error);
    mongoose.disconnect();
  });
});
