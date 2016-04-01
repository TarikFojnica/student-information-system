var express = require('express');
var router = express.Router();
var request = require('request');


router.use('/students', require('./students'))

router.get('/', function(req, res) {
	res.send("Home");
});

module.exports = router;
