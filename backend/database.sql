CREATE TABLE user
(
	id             INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	firstname      VARCHAR(100)        NOT NULL,
	lastname       VARCHAR(100)        NOT NULL,
	username       VARCHAR(100)        NOT NULL UNIQUE,
	email          VARCHAR(100)        NOT NULL UNIQUE,
	hashedPassword VARCHAR(100)        NOT NULL,
	role        	VARCHAR(15) NOT NULL DEFAULT 'free'
) engine = InnoDB
  default charset = latin1;

INSERT INTO user (firstname, lastname, username, email, hashedPassword, role)
VALUES ('Charlotte', 'Kieffer', 'Cha', 'kindred242@gmail.com',
		'$argon2id$v=19$m=65536,t=5,p=1$fqJ5foRrofHs73G562DJ2Q$PDRuCNODu9Q5+PT/AzaIfJz3IR4+N/B+R/GoT4DbTU0', 'admin'),
		('Romain', 'Bronquard', 'DarkOviS', 'romain.bronquard@gmail.com',
		'$argon2id$v=19$m=65536,t=5,p=1$fqJ5foRrofHs73G562DJ2Q$PDRuCNODu9Q5+PT/AzaIfJz3IR4+N/B+R/GoT4DbTU0', 'admin'),
		('Hugo', 'Rodriguez', 'Yhugzee', 'rodriguez.h@pm.me',
		 '$argon2id$v=19$m=65536,t=5,p=1$a/ScopyVE0Dr9uik/OXnQw$nDg+1gIMpK+eEXfUAr9JGNtVc0CPFhSzayTaCOLWIMc', 'admin'),
		('John', 'Doe', 'Jodoe', 'john@doe.com',
		 '$argon2id$v=19$m=65536,t=5,p=1$xutodeAMLAkk9Y9h1yvkPQ$LT3tDHDiCsovwwXwMuzzo58r5k3OoXEfcRTsOR3075Q', 'visitor');


CREATE TABLE category
(
	id            INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	category_name VARCHAR(100)        NOT NULL
) engine = InnoDB
  default charset = latin1;

INSERT INTO category (category_name)
VALUES ('Football'),
	   ('Basket');

CREATE TABLE video
(
	id                INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
	title             VARCHAR(200)        NOT NULL,
	description_video VARCHAR(900)        NOT NULL,
	publication_date  date                NOT NULL,
	link              VARCHAR(100)        NOT NULL,
	thumbnail VARCHAR(200) NOT NULL,
	category_id       INT                 NOT NULL,
	CONSTRAINT fk_video_category
		FOREIGN KEY (category_id)
			REFERENCES category (id)
) engine = InnoDB
  default charset = utf8mb4;

INSERT INTO video (title, description_video, publication_date, link, thumbnail, category_id)
VALUES ('NBA - Résumé VF : Golden State Warriors @ Los Angeles Lakers',
		'Avec un Stephen Curry en triple-double, son premier depuis 2016 et un Jordan Poole inspiré, les Warriors ont renversé les Lakers malgré les 67 pts du duo James-Davis.',
		'2021-10-20', 'https://www.youtube.com/embed/tSGtWkQ30no',
		'https://i.ytimg.com/vi/fmuDBDbYwYE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1LN1SOPKkLmxK_fXR__wI-ljluQ',
		2),
	   ('France 8-0 Kazakhstan, le résumé',
		'Face au Kazakhstan, emmenés par un Kylian Mbappé(4 buts) dans son jardin du Parc des Princes, les Bleus de Didier Deschamps ont obtenus leur billet pour le mondial 2022 au Qatar. Ils iront affronter la Finlande, mardi, à Helsinki pour clôturer cette phase de qualification.',
		'2021-11-15', 'https://www.youtube.com/embed/lhhCp7aTXnI',
		'https://i.ytimg.com/vi/lhhCp7aTXnI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDG9U0cg9ocdg3T3WnaHGSO2V9Qcw',
		1),
	   ('Résumé ARGENTINE 3 - 3 FRANCE | Finale Coupe Du Monde 2022 [HD] [TF1]',
		'La finale de la coupe du monde 2022 commenté par Grégoire Margotton et Bixente Lizarazu ! Argentine 3 - 3 France Résumé Finale Coupe du Monde 2022 Qatar
		Argentine',
		'2023-01-15', 'https://www.youtube.com/embed/RYJo97fC6RA',
		'https://i.ytimg.com/vi/RYJo97fC6RA/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAIhCGAHYAQHiAQYIHRgGIAE=&rs=AOn4CLBqpEXYfy6U3cpohQua_pigsXzlcw',
		1),
		("NBA Epic Moments", "The most dope, rare and Epic moments you've probably seen in NBA. All from Westbrook, Lebron James, Durant, Giannis, Morant and many more!",
		"2022-01-31",
		"https://www.youtube.com/embed/CXLM08fZO5o","https://i3.ytimg.com/vi/CXLM08fZO5o/maxresdefault.jpg",2),
		("Portugal vs Argentina 7-2 - All Goals & Highlights Résumén & Goles ( Last Matches ) HD","
		1) Argentina vs Portugal 0-1 (2014) 
		2) Portugal vs Argentina 1-2 (2011) 
		3) Portugal vs Argentina 2-0 (2016) 
		4) Portugal vs Argentina 3-0 (2003)", "2022-04-29", "https://www.youtube.com/embed/KqQU1s8B-lE", "https://i.ytimg.com/vi/KqQU1s8B-lE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAIhCGAHYAQHiAQYIHRgGIAE=&rs=AOn4CLD6pNfwq__fdR8e7Fuon8mW3TJWoA", 1), 
		("Résumé : CR7 et Messi se répondent dans un festival de buts", "🔥 Le PSG s'impose 5-4 face au Riyadh Season Team grâce à Messi, Marquinhos, Ramos, Mbappé et Ekitike !
		💪 Côté saoudien, Cristiano Ronaldo a répondu à la Pulga avec un doublé !", "2023-01-19", "https://www.youtube.com/embed/YQTJuURtZgQ", "https://i.ytimg.com/vi/YQTJuURtZgQ/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAIhCGAHYAQHiAQYIHRgGIAE=&rs=AOn4CLCgpdmkw_833YZtyXCwhNx0A8KugQ", 1),
		("Résumé : Real Madrid (Q) 3-1 Paris SG - Ligue des champions (8e de finale retour)", "Le PSG s'est écroulé à Madrid ! Vainqueur du match aller (1-0) grâce à Kylian Mbappé, le club de la capitale française pensait pouvoir rééditer l'exploit alors que le champion du monde ouvrait le score en fin de première période. Mais c'était sans compter sur Karim Benzema, auteur d'un triplé qui envoie les Merengue en quarts de finale.", 
		"2022-03-09", "https://www.youtube.com/embed/OQfv-xoZYGI", "https://i.ytimg.com/vi/OQfv-xoZYGI/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAIhCGAHYAQHiAQYIHRgGIAE=&rs=AOn4CLB7YBZPGcGFMG8ONFvOPaxT6jTGUA", 1),
		("Barcelona tops Baskonia on the road! | Round 20, Highlights | Turkish Airlines EuroLeague", "FC Barcelona moved level on wins with Real Madrid at the top of the Turkish Airlines EuroLeague standings after beating Cazoo Baskonia Vitoria-Gasteiz 78-85 at Buesa Arena on Thursday night. This victory improved Barca to 13-7, while Baskonia dropped to 11-9.", "2023-01-19",
		"https://www.youtube.com/embed/91VVL4_2r7k", "https://i.ytimg.com/vi/91VVL4_2r7k/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAIhCGAHYAQHiAQYIHRgGIAE=&rs=AOn4CLBptpVz_AS_bjfbZFiFOny6gCJujw",2), 
		("Résumé NBA Paris Game - VF : Chicago Bulls @ Detroit Pistons", "Les Chicago Bulls s'adjugent le NBA Paris Game 2023, victoire 126-108 face aux Detroit Pistons !
		🔥 Le duo Zach LaVine (30 points) DeMar DeRozan (24 points) était en feu !", "2023-01-19", "https://www.youtube.com/embed/_RSGjzcrO2M", "https://i.ytimg.com/vi/ZJYUVPU8yWo/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAIhCGAHYAQHiAQYIHRgGIAE=&rs=AOn4CLCaGmBcpf5gn3FeL5wfEWt60jhCkg", 2),
		("USA v Spain - Full Men's Basketball Final | Beijing 2008 Replays", "Relive the full Men's Basketball Final from the 2008 Summer Olympic Games in Beijing! The United States' Redeem Team with NBA superstars like LeBron James, Dwyane Wade, Team captain Kobe Bryant faced the Spanish squad. After a disappointing third place in the 2004 Olympics, the pressure was high on the USA to regain an Olympic title and to carry on the legacy of the former Olympic Dream Team of 1992.",
		"2020-04-19", "https://www.youtube.com/embed/jZY5cZWGWKE", "https://i.ytimg.com/vi/jZY5cZWGWKE/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAIhCGAHYAQHiAQYIHRgGIAE=&rs=AOn4CLA138ACPE94_JXhFqEmeGpc2RgmKw", 2),
		("Basketball - Men - USA-FRA - London 2012 Olympic Games", "BK05  - Men -  USA-FRA - Basketball - 29 July 2012 - London 2012 Olympic Games ", "2012-07-29", "https://www.youtube.com/embed/FH9KE8FSmig", "https://i.ytimg.com/vi/FH9KE8FSmig/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAIhCGAHYAQHiAQYIHRgGIAE=&rs=AOn4CLA4V3n-Q1Dr3G-1S5-y5F_AuF2jNw", 2),
		("USA BASKETBALL CRAZY 1 ON 1 DRILL! Kevin Durant vs Paul George & More!!!", "USA Basketball brought us one of the best basketball videos with an epic 1on1 drill. Featuring Kevin Durant, Paul George, Devin Booker, Victor Oladipo! This is crazy. Rules are simple first one to 5pts wins and only 2 dribbles.", "2018-07-28", "https://www.youtube.com/embed/ACvLYz9nHvg", "https://i.ytimg.com/vi/ACvLYz9nHvg/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAIhCGAHYAQHiAQYIHRgGIAE=&rs=AOn4CLDcShDiZFPqCHpGr33zpEyJeakWxQ", 2), 
		("Highlights! Man City 4-2 Tottenham Hotspur | Goals from Alvarez, Haaland and a Mahrez double", "City recovered from conceding two goals in two minutes at the end of the first-half to produce a stunning second 45 and beat Tottenham 4-2 on another memorable night at the Etihad Stadium. The Blues were at their irresistible best when it was needed most to repeat Tottenham's feat by scoring twice in two minutes early after the break through Julian Alvarez and Erling Haaland. Two more from the excellent Riyad Mahrez completed a superb comeback by City who had to dig deep to turn this game around.", 
		"2023-01-20", "https://www.youtube.com/embed/EbxrP1Mohq8", "https://i.ytimg.com/vi/EbxrP1Mohq8/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAIhCGAHYAQHiAQYIHRgGIAE=&rs=AOn4CLDJUR_uCN1X2MrHfUBG_KCSQpBJ4A", 1), 
		("Meilleurs buts de l'année 2022", "Meilleurs buts de l'année 2022 ©MNXHD", "2022-12-22", "https://www.youtube.com/embed/4v-rIjHpyEk", "https://i.ytimg.com/vi/4v-rIjHpyEk/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAIhCGAHYAQHiAQYIHRgGIAE=&rs=AOn4CLAEHlJP3FLPMpPrw3Xd1872EDhsfA", 1);