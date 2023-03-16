DROP DATABASE IF EXISTS Employee_db;
CREATE DATABASE Employee_db;


use Employee_db;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL,
)

CREATE TABLE role(
 id INT NOT NULL AUTO_INCREMENT 
 title VARCHAR(30) NOT NULL
 salary 

);


CREATE TABLE Employee (
  id INT NOT NULL AUTO_INCREMENT ,
 first_name VARCHAR(30) NOT NULL,
 last_name VARCHAR(30) NOT NULL,
 Employee_role VARCHAR(30) NOT NULL FOREIGN KEY (id),
 
);


