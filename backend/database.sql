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
('Football','Basket');

CREATE TABLE video (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  description_video VARCHAR(300) NOT NULL,
  publication_date date NOT NULL,
  link VARCHAR(100) NOT NULL,
  category_id INT NOT NULL,
    CONSTRAINT fk_video_category
      FOREIGN KEY (category_id)
      REFERENCES category(id)
)engine=InnoDB default charset=latin1;

INSERT INTO video (title, description_video, publication_date, link, category_id) VALUES
('NBA - Résumé VF : Golden State Warriors @ Los Angeles Lakers', 'Avec un Stephen Curry en triple-double, son premier depuis 2016 et un Jordan Poole inspiré, les Warriors ont renversé les Lakers malgré les 67 pts du duo James-Davis.', '2021-10-20', 'https://www.youtube.com/watch?v=tSGtWkQ30no', 2),
('France 8-0 Kazakhstan, le résumé', 'Face au Kazakhstan, emmenés par un Kylian Mbappé(4 buts) dans son jardin du Parc des Princes, les Bleus de Didier Deschamps ont obtenus leur billet pour le mondial 2022 au Qatar. Ils iront affronter la Finlande, mardi, à Helsinki pour clôturer cette phase de qualification.', '2021-11-15', 'https://www.youtube.com/watch?v=lhhCp7aTXnI', 1),
('FULL MATCH: France vs. Croatia', 'A new World Cup Champion will be crowned as France and Croatia take the stage in the Final of the 2018 edition of the tournament.', '2018', 'https://www.youtube.com/watch?v=SvV6aUki6LU', 1);
