CREATE TABLE role (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  role_name VARCHAR(50) NOT NULL
)engine=InnoDB default charset=latin1;

INSERT INTO role (role_name) VALUES
('Admin'),('Subscriber'),('Free');

CREATE TABLE user (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  username VARCHAR(100) NOT NULL UNIQUE, 
  email VARCHAR(100) NOT NULL UNIQUE,
  hashedPassword VARCHAR(100) NOT NULL,
  role_id INT NOT NULL,
  CONSTRAINT fk_user_role
    FOREIGN KEY (role_id)
    REFERENCES role(id)
)engine=InnoDB default charset=latin1;

INSERT INTO user (firstname, lastname, username, email, hashedPassword, role_id) VALUES
('Charlotte', 'Kieffer', 'Cha', 'kindred242@gmail.com', '$argon2id$v=19$m=16,t=2,p=1$emVmemVmemVmemZlenplZHpkZGZ6ZnpmZXphZGF6ZGQ$UKaGZ9hGFn/S5SBQDMe/Uw', 1);

CREATE TABLE category (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  category_name VARCHAR(100) NOT NULL
)engine=InnoDB default charset=latin1;

INSERT INTO category (category_name) VALUES
('Football');

CREATE TABLE video (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  description_video VARCHAR(300) NOT NULL,
  publication_date date NOT NULL,
  thumbnail VARCHAR(100) NOT NULL,
  category_id INT NOT NULL,
    CONSTRAINT fk_video_category
      FOREIGN KEY (category_id)
      REFERENCES category(id)
)engine=InnoDB default charset=latin1;

INSERT INTO video (title, description_video, publication_date, thumbnail, category_id) VALUES
('lorem ipsum', 'lorem ipsum', '2022-12-06', 'lorem ipsum', 1);
