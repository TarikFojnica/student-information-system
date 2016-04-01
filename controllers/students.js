var express = require('express');
var router = express.Router();
var Students = require('../models/students');

router.get('/new/', function(req, res) {
	Students.create(req.query.firstName, req.query.lastName, req.query.major);
	res.send("Inserted successfully "); 
});

router.get('/all', function(req, res) {
	Students.getAll(function (results) {
    	res.json(results);
    });     
});

module.exports = router;