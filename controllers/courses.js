var express = require('express');
var router = express.Router();
var Courses = require('../models/courses');

//Create new course
router.post('/new', function(req, res) {
	Courses.create(
		req.body.name,
		req.body.code,
		req.body.teacherId
	);
	res.json(req.body); 
});

//Get All Courses with Teachers
router.get('/all', function(req, res) {
	Courses.getAll(function (results) {
    	res.json(results);
    }); 
});


module.exports = router;