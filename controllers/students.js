var express = require('express');
var router = express.Router();
var Students = require('../models/students');

router.post('/new', function(req, res) {
	// Students.create(req.query.firstName, req.query.lastName, req.query.major);
	console.log(req.body);
	res.send(req.body); 
});

router.get('/all', function(req, res) {
	Students.getAll(function (results) {
    	res.json(results);
    });     
});



module.exports = router;