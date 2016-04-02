INSERT INTO Students VALUES ('John', 'Doe', '2131', 'PSY');
INSERT INTO Students VALUES ('Alfred', 'Einstein', '12313', 'PSY');

CREATE TABLE Teachers (
	FirstName varchar(30) NOT NULL,
	LastName varchar(30) NOT NULL,
	PhoneNumber int(20),
	Email varchar(50) NOT NULL,
	Office varchar(10),
	TeacherID int NOT NULL,
	PRIMARY KEY (TeacherID)
);


CREATE TABLE Student (
	FirstName varchar(30) NOT NULL,
	LastName varchar(30) NOT NULL,
	Faculty varchar(30) NOT NULL,
	Program varchar(30) NOT NULL,
	PhoneNumber int(30) NOT NULL,
	Email varchar(30) NOT NULL,
	GPA FLOAT,
	CGPA FLOAT,
	ID int AUTO_INCREMENT,
	StudentID int(20) NOT NULL,
	Birthday DATE,
	PRIMARY KEY (ID)
);


INSERT INTO Teachers VALUES ('Krishna', 'Profesor', '062822934', 'teacher@sisapp.io', 'F1.25', '1234564');

CREATE TABLE Teacher (
	FirstName varchar(30) NOT NULL,
	LastName varchar(30) NOT NULL,
	PhoneNumber varchar(30) NOT NULL,
	Email varchar(30) NOT NULL,
	ID int AUTO_INCREMENT,
	TeacherID int(20) NOT NULL,
	PRIMARY KEY (ID)
);


ALTER TABLE student MODIFY COLUMN StudentID INT auto_increment