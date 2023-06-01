CREATE DATABASE KyalZin;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  code VARCHAR(50) NOT NULL,
  fname VARCHAR(100) NOT NULL,
  lname VARCHAR(100) NOT NULL,
  profile VARCHAR(100) DEFAULT "../images/logo.png",
  account_type VARCHAR(10) DEFAULT "reader",
  status VARCHAR(10) DEFAULT "user",
  balance INT DEFAULT 0,
  star INT DEFAULT 0,
  pen INT DEFAULT 0,
  author_count INT DEFAULT 0,
  follower INT DEFAULT 0,
  earning INT DEFAULT 0,
  member INT DEFAULT 0,
  email VARCHAR(50) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  gender VARCHAR(10) NOT NULL,
  dob VARCHAR(50) NOT NULL,
  start_date VARCHAR(50) NOT NULL,
  end_date VARCHAR(50) NOT NULL,
  sponsor VARCHAR(50) DEFAULT '00000000000',
  password VARCHAR(100) NOT NULL
);

INSERT INTO users (username, fname, lname, email, phone, gender, dob, start_date, password)
            VALUES ();
            
CREATE TABLE contents (
  id INT AUTO_INCREMENT PRIMARY KEY,
  profile VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  code VARCHAR(50) NOT NULL,
  time VARCHAR(100) NOT NULL,
  content TEXT(300) NOT NULL,
  likes INT DEFAULT 0,
  save INT DEFAULT 0,
  star INT DEFAULT 0
);

INSERT INTO contents (profile, name, code, time, content)
            VALUES()
            
CREATE TABLE reports (
  id INT AUTO_INCREMENT PRIMARY KEY,
  box_id INT NOT NULL,
  user_code VARCHAR(100) NOT NULL,
  content TEXT(300) NOT NULL
);

INSERT INTO reports (box_id, user_code, content)
            VALUES()


CREATE TABLE likes (
  like_id INT AUTO_INCREMENT PRIMARY KEY,
  box_id INT NOT NULL,
  user_code VARCHAR(100) NOT NULL,
  fav_time VARCHAR(100) NOT NULL
);

INSERT INTO likes (box_id, user_code)
            VALUES()


CREATE TABLE save (
  save_id INT AUTO_INCREMENT PRIMARY KEY,
  box_id INT NOT NULL,
  user_code VARCHAR(100) NOT NULL,
  fav_time VARCHAR(100) NOT NULL
);

INSERT INTO save (box_id, user_code)
            VALUES()

CREATE TABLE star (
  star_id INT AUTO_INCREMENT PRIMARY KEY,
  box_id INT NOT NULL,
  user_code VARCHAR(100) NOT NULL,
  fav_time VARCHAR(100) NOT NULL
);

INSERT INTO star (box_id, user_code)
            VALUES()


CREATE TABLE removed_post (
  remove_post_id INT AUTO_INCREMENT PRIMARY KEY,
  box_id INT NOT NULL,
  user_code VARCHAR(100) NOT NULL
);

INSERT INTO removed_post (box_id, user_code)
            VALUES()


CREATE TABLE visitors (
  visitor_id INT AUTO_INCREMENT PRIMARY KEY,
  visited_username VARCHAR(100) NOT NULL,
  visited_day INT NOT NULL,
  visited_month VARCHAR(10) NOT NULL,
  visited_year INT NOT NULL
);

INSERT INTO visitors (visited_username, visited_day, visited_month, visited_year)
            VALUES()


CREATE TABLE log (
  log_id INT AUTO_INCREMENT PRIMARY KEY,
  log_title VARCHAR(50) NOT NULL,
  amount INT NOT NULL,
  fee INT DEFAULT 0,
  star INT DEFAULT 0,
  log_username VARCHAR(100) NOT NULL,
  log_user_code VARCHAR(20) NOT NULL,
  log_day INT NOT NULL,
  log_month VARCHAR(10) NOT NULL,
  log_year INT NOT NULL,
  log_time VARCHAR(50) NOT NULL,
  transaction_ID VARCHAR(50) NOT NULL
);

INSERT INTO log (log_title, amount, fee, star, log_username, log_user_code, log_day, log_month, log_year, log_time, transaction_ID)
            VALUES()
            

CREATE TABLE money_requests (
  money_requests_id INT AUTO_INCREMENT PRIMARY KEY,
  money_requests_title VARCHAR(50) NOT NULL,
  money_requests_username VARCHAR(100) NOT NULL,
  transaction_voucher_digits VARCHAR(20),
  slip VARCHAR(100),
  account VARCHAR(50) NOT NULL,
  amount INT NOT NULL,
  address VARCHAR(50) NOT NULL,
  log_time VARCHAR(50) NOT NULL,
  transaction_ID VARCHAR(50) NOT NULL
);

INSERT INTO money_requests (money_requests_title, money_requests_username, account, amount, address, log_time, transaction_ID)
            VALUES()