var mysql = require("mysql");

// Create connection
var conn;
function createConnection() {
    con = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123',
      database: 'sis'
  });
};
createConnection();

//connect to database
con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

//Create new student
exports.create = function(firstName, lastName, faculty, program, phoneNumber, email, gpa, cgpa, studentId, birthday) {
  var Student = {
    FirstName: firstName,
    LastName: lastName,
    Faculty: faculty,
    Program: program,
    PhoneNumber: phoneNumber,
    Email: email,
    GPA: gpa,
    CGPA: cgpa,
    StudentId: studentId,
    Birthday: birthday
  }

  con.query('INSERT INTO student SET ?', Student, function(err, res){
    if(err) throw err;
    console.log('Last insert ID:', res.insertId); 
    console.log(res);
  });
};

//Get one student
exports.getOne = function(id, cb) {
  con.query('SELECT * FROM Student WHERE ID = ?', id ,function(err, res){
      if(err) throw err;
      console.log(res);
      cb(res);
  }); 
};

//Update student
exports.update = function(firstName, lastName, faculty, program, phoneNumber, email, gpa, cgpa, studentId, birthday, id) {
  var UpdatedStudent = {
    FirstName: firstName,
    LastName: lastName,
    Faculty: faculty,
    Program: program,
    PhoneNumber: phoneNumber,
    Email: email,
    GPA: gpa,
    CGPA: cgpa,
    StudentId: studentId,
    Birthday: birthday
  }

  con.query(
    'UPDATE Student SET ? WHERE ID = ?', [UpdatedStudent, id] , function(err, res){
      if(err) throw err;
      console.log(res);
  }); 
};

//Delete student
exports.delete = function(id, cb) {
  con.query('DELETE FROM Student WHERE ID = ?', id ,function(err, res){
      if(err) throw err;
      console.log(res);
  });
};

//Get all students
exports.getAll = function(cb) {
   con.query('SELECT * FROM Student', function(err, res){
      if(err) throw err;
      console.log(res);
      cb(res);
  });
};

