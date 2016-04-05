var express = require('express');
var router = express.Router();
var Teachers = require('../models/teachers');

router.post('/new', function(req, res) {
	// Students.create(req.query.firstName, req.query.lastName, req.query.major);
	Teachers.create(
		req.body.firstName, 
		req.body.lastName,
		req.body.phoneNumber,
		req.body.email,
		req.body.teacherId
		);

	console.log(req.body);
	res.send(req.body); 
});

router.get('/all', function(req, res) {
	Teachers.getAll(function (results) {
    	res.json(results);
    });     
});

module.exports = router;