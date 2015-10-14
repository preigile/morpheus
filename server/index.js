var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	next();
});

mongoose.connect('mongodb://localhost/nio-db');

var termSchema = new mongoose.Schema({
	title: 'string',
	content: 'string',
	author: 'string'
});

var TermModel = mongoose.model('term', termSchema);
app.get('/',function(req,res) {
	res.send('Working');
});

app.listen('4500');
