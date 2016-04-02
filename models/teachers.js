var mysql = require("mysql");

// Create connection
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

exports.create = function(firstName, lastName, phoneNumber, email, teacherId) {
  var Teacher = {
    FirstName: firstName,
    LastName: lastName,
    PhoneNumber: phoneNumber,
    Email: email,
    TeacherId: teacherId,
  }

  con.query('INSERT INTO Teacher SET ?', Teacher, function(err, res){
    if(err) throw err;
    console.log('Last insert ID:', res.insertId); 
    console.log(res);
  });
};

exports.getAll = function(cb) {
   con.query('SELECT * FROM Teacher', function(err, res){
      if(err) throw err;
      console.log(res);
      cb(res);
  });
}
