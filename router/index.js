var express = require('express');
var path = require('path');
var router = express.Router();
var load_infor = require('./loadInfor');

router.get('/', function(req, res){
    console.log('/로 get 방식으로 접근');
    document.cookie['tab_num'] = 1;
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

router.get('/imgs/*', load_infor);
router.post('/cafi_proj', load_infor);
router.post('/cafi_iot_proj', load_infor);
router.post('/itub_proj', load_infor);
router.post('/send_fileName', load_infor);

module.exports = router; 