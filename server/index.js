var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var favicon = require('serve-favicon');
var boom = require('express-boom');
var dotenv = require('dotenv');

const result = dotenv.config();

var port = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));
app.use(cookieParser());
app.use(boom());

app.engine('html', require('ejs').renderFile);
app.use(favicon(`${__dirname}/public/favicon.ico`));
app
  .get('/',(req, res, next) => {
    res.sendfile(__dirname + "/public/index.html");
  })
  .on('error', errorHandler);

app.use('/api', require('./api'));

http
    .createServer(app)
    .listen(port, onListen)
    .on('error', errorHandler);

app.use(function(req, res, next) {
  res.boom.notFound();
  next();
});

function onListen() {
    console.log('Server is running on http://localhost:%d in %s mode', port, process.env.NODE_ENV || 'development');
}

function errorHandler(error) {
    console.log( "Error: \n" + error.message );
    console.log( error.stack );
}
