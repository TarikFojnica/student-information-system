-- Create student query
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

-- Create teacher query
CREATE TABLE Teacher (
	FirstName varchar(30) NOT NULL,
	LastName varchar(30) NOT NULL,
	PhoneNumber varchar(30) NOT NULL,
	Email varchar(30) NOT NULL,
	ID int AUTO_INCREMENT,
	TeacherID int(20) NOT NULL,
	PRIMARY KEY (ID)
);

-- Create teacher course
CREATE TABLE Teacher (
	Name varchar(30) NOT NULL,
	Code varchar(30) NOT NULL,
	ID varchar(30) NOT NULL,
	PRIMARY KEY (ID)
);

-- Modify table column type
ALTER TABLE student MODIFY COLUMN StudentID INT auto_increment

-- Update row in Student table 
UPDATE Student SET FirstName = "Meryem" WHERE ID = 2;