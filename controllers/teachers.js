var express = require('express');
var router = express.Router();
var Teachers = require('../models/teachers');

//New student
router.post('/new', function(req, res) {
	
	Teachers.create(
		req.body.name,
		req.body.phoneNumber,
		req.body.email
		);

	console.log(req.body);
	res.send(req.body); 
});

//Get one teacher
router.get('/:id', function(req, res) {
	Teachers.getOne(req.params.id, function(results) {
		res.json(results);
	}); 
}); 

//Update teacher
router.put('/:id' ,function(req, res) {
	Teachers.update(
		req.body.name,
		req.body.phoneNumber,
		req.body.email,
		req.params.id //pulling id from the url parameters
	);

	console.log(req.body);
	res.json(req.body); 
});

//Delete teacher
router.delete('/:id', function(req, res) {
	Teachers.delete(req.params.id);
	res.send("Teacher with the id " + req.params.id + " successfully deleted!")
});

//Get all teachers
router.get('/all', function(req, res) {
	Teachers.getAll(function (results) {
    	res.json(results);
    });     
});

module.exports = router;