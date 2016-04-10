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

exports.create = function(courseName, courseCode, teacherId) {
    var Course = {
        CourseName: courseName,
        CourseCode: courseCode,
        TeacherID: teacherId
    };

    con.query('INSERT INTO Course SET ?', Course, function(err, res){
        if(err) throw err;
        console.log('Last insert ID:', res.insertId);
        console.log(res);
    });
};

//Get all courses
exports.getAll = function(cb) {
    con.query('SELECT CourseName, CourseCode, Course.ID,  Name, PhoneNumber FROM Course, Teacher WHERE Course.TeacherID = Teacher.ID;', function(err, res){
        if(err) throw err;
        console.log(res);
        cb(res);
    });
};
