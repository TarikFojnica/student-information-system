var mysql = require("mysql");

// Create connection
var con;
function createConnection() {
    con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123',
        database: 'sis'
    });
}
createConnection();

//Create new student
exports.create = function(name, faculty, program, phoneNumber, email, gpa, cgpa, birthday) {
    var Student = {
        Name: name,
        Faculty: faculty,
        Program: program,
        PhoneNumber: phoneNumber,
        Email: email,
        GPA: gpa,
        CGPA: cgpa,
        Birthday: birthday
    };

    con.query('INSERT INTO student SET ?', Student, function(err, res){
        if(err) throw err;
        console.log('Last insert ID:', res.insertId);
        console.log(res);
    });
};

//Get one student
exports.getOne = function(id, cb) {
    con.query('SELECT * FROM Student WHERE ID = ?', id, function(err, res){
        if(err) throw err;
        console.log(res);
        cb(res);
    });
};

//Update student
exports.update = function(name, faculty, program, phoneNumber, email, gpa, cgpa, birthday, id) {
    var UpdatedStudent = {
        Name: name,
        Faculty: faculty,
        Program: program,
        PhoneNumber: phoneNumber,
        Email: email,
        GPA: gpa,
        CGPA: cgpa,
        Birthday: birthday
    };

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

//Create Student course Registration
exports.courseRegistration = function(studentId, courseId) {
    var CourseRegistration = {
        StudentID: studentId,
        CourseID: courseId
    };

    con.query('INSERT INTO CourseRegistration SET ?', CourseRegistration, function(err, res){
        if(err) throw err;
        console.log('Last insert ID:', res.insertId);
        console.log(res);
    });
};

//Get all course registrations
exports.getCourseRegistrations = function(cb) {
	con.query('SELECT CourseName, CourseCode, Course.ID,  Name, FROM Course, Student, CourseRegistration WHERE CourseRegistration.StudentID = Student.ID AND CourseRegistration.CourseID = Course.ID;', function(err, res){
		if(err) throw err;
		console.log(res);
		cb(res);
	});
};
