var express = require('express');
var router = express.Router();
var path = require('path');

var fileName;

router.post('/send_fileName', function(req, res){
    console.log(req.body.data);
    fileName = req.body.data;
});

router.post('/copy_proj', function (req, res) {
        res.send('<h1>' + fileName['fileName_1'] + '</h1>');
    
    //res.sendFile(path.join(__dirname, '../public/main.html'));
});

module.exports = router;