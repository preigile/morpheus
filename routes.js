var app = require('express')();
var http = require('http').Server(app);

var index = require('./controllers/index');

app.get('/', index.show);

module.exports = http;