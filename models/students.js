var mysql = require("mysql");

// First you need to create a connection to the db
var conn;
var students;
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


exports.create = function(firstName, lastName, faculty, program, phoneNumber, email, gpa, cgpa, studentId, birthday) {
  var Student = {
    firstName: firstName,
    lastName: lastName,
    faculty: faculty,
    program: program,
    phoneNumber: phoneNumber,
    email: email,
    gpa: gpa,
    cgpa: cgpa,
    studentId: studentId,
    birthday: birthday
  }

  con.query('INSERT INTO student SET ?', Student, function(err, res){
    if(err) throw err;
    console.log('Last insert ID:', res.insertId); 
    console.log(res);
  });
};

exports.getAll = function(cb) {
   con.query('SELECT * FROM Student', function(err, res){
      if(err) throw err;
      console.log(res);
      cb(res);
  });
}
