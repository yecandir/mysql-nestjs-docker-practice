USE DOCKERIZED;
CREATE TABLE users(
   id INT AUTO_INCREMENT,
   fullname VARCHAR(50) NOT NULL,
   photo VARCHAR(100) NOT NULL,
   isDeleted BOOLEAN DEFAULT FALSE,
   PRIMARY KEY(id)
);