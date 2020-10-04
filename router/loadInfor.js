var express = require('express');
var router = express.Router();
var path = require('path');

var fileName;

router.get('/imgs/*', function(req, res){
    res.sendFile(path.join(__dirname, '..' + req.url));
    console.log(req.url);
});

router.post('/send_fileName', function(req, res){
    //console.log(req.body.data);
    fileName = req.body.data;
});

router.post('/cafi_proj', function (req, res) {
    res.render('../public/cafi_proj.ejs', {data:fileName});
    //res.sendFile(path.join(__dirname, '../public/copy_proj.html'));
});

router.post('/itub_proj', function (req, res) {
    res.render('../public/itub_proj.ejs', {data:fileName});
    //res.sendFile(path.join(__dirname, '../public/copy_proj.html'));
});

module.exports = router;