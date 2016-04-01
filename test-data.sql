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

INSERT INTO Teachers VALUES ('Krishna', 'Profesor', '062822934', 'teacher@sisapp.io', 'F1.25', '1234564');

CREATE TABLE Course (
	Name varchar(30) NOT NULL,
	Teacher varchar(30) NOT NULL,
	CourseID varchar(10) NOT NULL,
	PRIMARY KEY (TeacherID)
);


ALTER TABLE student MODIFY COLUMN StudentID INT auto_increment