var express = require('express');
var router = express.Router();
var mysql = require("mysql");

// First you need to create a connection to the db
var conn;
function createConnection() {
    con = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'tarik3656422',
      database: 'sis'
  });
}
createConnection();

//connect to database
con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});


exports.create = function(firstName, lastName, major) {
  var Student = {
    firstName: firstName,
    lastName: lastName,
    major: major
  }

  con.query('INSERT INTO student SET ?', Student, function(err, res){
    if(err) throw err;
    console.log('Last insert ID:', res.insertId); 
    console.log(res);

    con.end(function(err) {
      // The connection is terminated gracefully
      // Ensures all previously enqueued queries are still
      // before sending a COM_QUIT packet to the MySQL server.
      createConnection();
    });
  });
}

exports.getAll = function() {
   con.query('SELECT * FROM Student', function(err, res){
    if(err) throw err;
    // console.log(res); 
    
  });
}

module.exports = router;