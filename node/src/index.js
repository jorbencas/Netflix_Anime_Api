const morgan = require('morgan');
var mongoose = require('mongoose');
const express = require("express");
const cors = require("cors");
const errorhandler = require('errorhandler');
//initialicing package
const app = express();
const path = require("path");
const http = require('http').createServer(app);
let io = require('socket.io')(http);
const sockets = require('./socketIo');
app.use(express.json());
// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(errorhandler());

// static files
//app.use(express.static(path.join(__dirname, "static")));

app.get('/onlineusers', (req, res) => {
  res.send(io.sockets.adapter.rooms)
})

//routes
app.use(require('./routes'));

// Catch 404 Errors
const err = new Error('not Found');
app.use((req, res, next) => {
  err.status = 404;
  next(err);
});

// Error hanlder function
app.use((err, req, res, next) => {
  const error = app.get('env') === 'development' ? err : {};
  const status = err.status || 500;

  res.status(status).json({
    error: {
      message: error.message
    }
  });
});

//config server
app.set('port', 3001).listen(
  app.get('port'), () => {
    console.log(`El servidor esta corriendo ${app.get('port')}`)
    mongoose.connect('mongodb://localhost:27017/cosasdeanime', { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    mongoose.set('debug', true);
    mongoose.connection.on('error', function(err){
      console.log('connection error', err)
    });

    mongoose.connection.once('open', function(){
      console.log('Connection to DB successful')
    });

    // sockets
    sockets(io)
})
























