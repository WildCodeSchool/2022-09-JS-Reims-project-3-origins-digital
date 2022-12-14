CREATE TABLE user (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  username VARCHAR(100) NOT NULL, 
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
)engine=InnoDB default charset=latin1;

INSERT INTO user (firstname, lastname, username, email, password) VALUES
('Charlotte', 'Kieffer', 'Cha', 'kindred242@gmail.com', '1234');

CREATE TABLE video (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  description_video VARCHAR(300) NOT NULL,
  publication_date date NOT NULL,
  thumbnail VARCHAR(100) NOT NULL
)engine=InnoDB default charset=latin1;

INSERT INTO video (title, description_video, publication_date, thumbnail) VALUES
('lorem ipsum', 'lorem ipsum', '2022-12-06', 'lorem ipsum');