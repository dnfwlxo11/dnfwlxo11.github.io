var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

router.post('/copy_proj', function(req, res){
    console.log(req.body);
    console.log(1);

    res.sendFile(path.join(__dirname, '../public/copy_proj.html'));
});

module.exports = router;