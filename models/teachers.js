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

exports.create = function(name, phoneNumber, email) {
    var Teacher = {
        Name: name,
        PhoneNumber: phoneNumber,
        Email: email
    };

    con.query('INSERT INTO Teacher SET ?', Teacher, function(err, res){
        if(err) throw err;
        console.log('Last insert ID:', res.insertId);
        console.log(res);
    });
};

//Get one student
exports.getOne = function(id, cb) {
    con.query('SELECT * FROM Teacher WHERE ID = ?', id, function(err, res){
        if(err) throw err;
        console.log(res);
        cb(res);
    });
};


exports.getAll = function(cb) {
    con.query('SELECT * FROM Teacher', function(err, res){
        if(err) throw err;
        console.log(res);
        cb(res);
    });
};

exports.update = function(name, phoneNumber, email, id) {
    var UpdatedTeacher = {
        Name: name,
        PhoneNumber: phoneNumber,
        Email: email
    };

    con.query('UPDATE Teacher SET ? WHERE ID = ?', [UpdatedTeacher, id], function(err, res){
            if(err) throw err;
            console.log('Last insert ID:', res.insertId);
            console.log(res);
        });
};

exports.delete = function(id) {
    con.query('DELETE FROM Teacher WHERE ID = ?', id ,function(err, res){
        if(err) throw err;
        console.log(res);
    });
}