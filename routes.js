var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

var index = require('./controllers/index');
var jedi = require('./controllers/jedi');
var padawan = require('./controllers/padawan');

function initServer() {
    app.use(bodyParser.json());
    app.use(express.static(__dirname + '/shared'));
}

function declareRoutes() {
    app.get('/', index.show);
    app.get('/jedi', jedi.show);
    app.post('/jedi', jedi.input);
    app.get('/padawan', padawan.show);
}

initServer();
declareRoutes();

module.exports = http;
