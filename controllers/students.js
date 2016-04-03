var express = require('express');
var router = express.Router();
var Students = require('../models/students');

//Create new student
router.post('/new', function(req, res) {
	Students.create(
		req.body.firstName, 
		req.body.lastName,
		req.body.faculty,
		req.body.program,
		req.body.phoneNumber,
		req.body.email,
		req.body.gpa,
		req.body.cgpa,
		req.body.studentId,
		req.body.birthday
		);

	console.log(req.body);
	res.json(req.body); 
});

//Get all students
router.get('/all', function(req, res) {
	Students.getAll(function (results) {
    	res.json(results);
    });     
});

//Get one student
router.get('/:id', function(req, res) {
	Students.getOne(req.params.id, function(results) {
		res.json(results);
	}); 
}); 

//Delete student
router.delete('/:id', function(req, res) {
	Students.delete(req.params.id);
	res.send("Student with the id " + req.params.id + " successfully deleted!")
});

//Update student
router.put('/:id' ,function(req, res) {
	Students.update(
		req.body.firstName, 
		req.body.lastName,
		req.body.faculty,
		req.body.program,
		req.body.phoneNumber,
		req.body.email,
		req.body.gpa,
		req.body.cgpa,
		req.body.studentId,
		req.body.birthday,
		req.params.id //pulling id from the url parameters
	);

	console.log(req.body);
	res.json(req.body); 
})



module.exports = router;