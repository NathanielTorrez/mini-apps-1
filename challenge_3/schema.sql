DROP DATABASE IF EXISTS user;

CREATE DATABASE user;

USE user;

CREATE TABLE user_info (
  id int  AUTO_INCREMENT PRIMARY KEY,
  fullName  VARCHAR(20),
  email VARCHAR(40),
  pword VARCHAR(16),
  address1 VARCHAR(40),
  address2 VARCHAR(40),
  city VARCHAR(20),
  state1 VARCHAR(20),
  zipcode int,
  cardNum int,
  expiration VARCHAR(15),
  cvv int,
  billZip int
);

INSERT INTO user_info (fullName, email, pword, address1, city, state1, zipcode, cardNum, expiration, cvv, billZip ) VALUES ('nate', 'natedawg@gmail.com', 'password', '3435 chart way', 'san bruno', 'california', 95220, 0123456789, '09/25', 788, 95632);