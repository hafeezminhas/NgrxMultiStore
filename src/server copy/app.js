var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app
    .all("/*", serveStatic)
    .on('error', errorHandler);

http
    .createServer(app)
    .listen(port, onListen)
    .on('error', errorHandler);

function serveStatic (req, res) {
    res
        .status(200)
        .set({ 'content-type': 'text/html; charset=utf-8' })
        .sendfile(path.join(__dirname, "public/index.html"));
}

function onListen() {
    console.log('Server is running on http://localhost:%d in %s mode', port, process.env.NODE_ENV || 'development');
}

function errorHandler(error) {
    console.log( "Error: \n" + error.message );
    console.log( error.stack );
}
