-- Create student query
CREATE TABLE Student (
	Name varchar(100) NOT NULL,
	Faculty varchar(30) NOT NULL,
	Program varchar(30) NOT NULL,
	PhoneNumber varchar(30) NOT NULL,
	Email varchar(30) NOT NULL,
	GPA FLOAT,
	CGPA FLOAT,
	ID int AUTO_INCREMENT,
	Birthday DATE,
	PRIMARY KEY (ID)
);

-- Create teacher query
CREATE TABLE Teacher (
	Name varchar(100) NOT NULL,
	PhoneNumber varchar(30) NOT NULL,
	Email varchar(30) NOT NULL,
	ID int AUTO_INCREMENT,
	PRIMARY KEY (ID)
);
--TODO Make TeacherID unique


-- Create course query
CREATE TABLE Course (
	Name varchar(50) NOT NULL,
	Code varchar(10) NOT NULL,
	ID int AUTO_INCREMENT,
	TeacherID int,
	PRIMARY KEY (ID),
	FOREIGN KEY (TeacherID) REFERENCES Teacher (ID)
);


-- Add new course
INSERT INTO Course VALUES("Introduction to Programming", "CS101", 1);

-- Modify table column type
ALTER TABLE student MODIFY COLUMN StudentID INT auto_increment

-- Update row in Student table 
UPDATE Student SET FirstName = "Meryem" WHERE ID = 2;


-- Delete from table
DELETE FROM Course WHERE ID = 1;

--Join Teachers and Courses
SELECT Name, Code, FirstName, LastName FROM Course, Teacher WHERE Course.TeacherID = Teacher.ID;