var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = require('./router/router');

var hostname = '127.0.0.1';
var port = '3001';

app.listen(port, hostname, function (req, res) {
    console.log('open Server!!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.use(express.static('public'));