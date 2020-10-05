var express = require('express');
var bodyParser = require('body-parser');
var cookie_parser = require('cookie-parser');
var app = express();
var router = require('./router/index');

var port = process.env.PORT || 8000;

app.listen(port, function (req, res) {
    console.log('Open Server!!');
});

app.set('view engine', 'ejs');

app.use(cookie_parser());
app.use(express.static('public'));
app.use(express.static('imgs'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);