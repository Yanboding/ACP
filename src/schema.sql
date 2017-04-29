DROP TABLE IF EXISTS User;
DROP TABLE IF EXISTS Administrator;
DROP TABLE IF EXISTS Product;
DROP TABLE IF EXISTS Contribution;
DROP TABLE IF EXISTS Archive;
DROP TABLE IF EXISTS Comment;

-- a user registerd at the platform
CREATE TABLE User (
	uID varchar(20) NOT NULL,
	username varchar(10) NOT NULL UNIQUE,
	name varchar(20) NOT NULL,
	password varchar(13) NOT NULL,
	status varchar(100) NOT NULL,
	question varchar(50) NOT NULL,			-- the secuirty question
	answer varchar(40) NOT NULL,			--  answer to the question
	--Personal statements
	--Education
	PRIMARY KEY(uID)
);

-- admin of the platform, have more right than normal user
CREATE TABLE Administrator (
	aID varchar(20) NOT NULL,
	username varchar(10) NOT NULL UNIQUE,
	name varchar(15) NOT NULL,
	password varchar(13) NOT NULL,
	PRIMARY KEY(aID)
);

-- a product is a picture on the platform
-- parent can be null
CREATE TABLE Product (
	pID varchar(20) NOT NULL,
	name varchar(200),
	root varchar(20) NOT NULL,
	parent varchar(20) NOT NULL,
	dateIssued date,
	imageURL varchar(200),
	admin INTEGER,
	isProcessed INTEGER, 				-- stores 1 or nothing, 1 means this product have been processed by assigned admin
	vaild INTEGER,						-- stores 1 or nothing, 1 means this product have been approved by assigned admin
	artist varchar(30),
	description varchar(300),
	PRIMARY KEY(pID),
	FOREIGN KEY(root) REFERENCES Product(pID),
	FOREIGN KEY(parent) REFERENCES Product(pID),
	FOREIGN KEY(admin) REFERENCES Administrator(aID)
);

-- the user with uID contributed to the product with pID
-- the contribution amount shows how much the user had contributed
CREATE TABLE Contribution (
	pID varchar(20) NOT NULL,
	uID INTEGER NOT NULL,
	amount INTEGER,
	PRIMARY KEY(pID, uID),
	FOREIGN KEY(pID) REFERENCES Product(pID),
	FOREIGN KEY(uID) REFERENCES User(uID)
);

-- the time where the product was saved
CREATE TABLE Archive (
	pID varchar(20) NOT NULL,
	archiveTime timestamp NOT NULL,
	PRIMARY KEY(pID, archiveTime),
	FOREIGN KEY(pID) REFERENCES Product(pID)
);

CREATE TABLE Comment (
	pID varchar(20) NOT NULL,
	uID varchar(20) NOT NULL,
	commentIssued timestamp NOT NULL,
	content varchar(100) NOT NULL,
	type varchar(10) NOT NULL,
	PRIMARY KEY(pID, uID, commentIssued),
	FOREIGN KEY(pID) REFERENCES Product(pID),
	FOREIGN KEY(uID) REFERENCES User(uID)
);




INSERT INTO User (uID, username, name, password, status, question, answer) VALUES ('A00001','Leon@gmail.com','Leon', '$2a$10$nNI0oyy/aFb2tzD1V7PSMOc7pBPEAUt6YJEJQsC2GOe5rL8yznW1O','UI Designer', 'what is the name of my first pet?', 'Lily');
INSERT INTO User (uID, username, name, password, status, question, answer) VALUES ('B00002','Kai@gmail.com', 'Kai', '$2a$10$nNI0oyy/aFb2tzD1V7PSMOc7pBPEAUt6YJEJQsC2GOe5rL8yznW1O','UI Designer', 'what is the name of my first pet?', 'Nike');
INSERT INTO Administrator (aID, username, name, password) VALUES ('Admin55555','Leon@gmail.com', 'Leon','$2a$10$nNI0oyy/aFb2tzD1V7PSMOc7pBPEAUt6YJEJQsC2GOe5rL8yznW1O');
INSERT INTO Product (pID, name,root, parent,dateIssued,imageURL, artist,description, admin) VALUES ('P12345','Anime','P12345','P12345',0,'https://s3.amazonaws.com/ACPimages/dummyb1p2.jpeg','Leon@gmail.com','This is a picture of Doraemon', 1);
INSERT INTO Product (pID, name,root, parent,dateIssued,imageURL, artist,description, admin) VALUES ('P11111','Anime','P11111','P11111',0,'https://s3.amazonaws.com/ACPimages/dummyb1p2.jpeg','Kai@gmail.com','Doraemon all the way', 1);
INSERT INTO User (uID, username, name, password, status, question, answer) VALUES ('B00003','Kai@hotmail.com', 'Kai', '$2a$10$nNI0oyy/aFb2tzD1V7PSMOc7pBPEAUt6YJEJQsC2GOe5rL8yznW1O','UI Designer' ,'what is the name of my first pet?', 'Geroge');
INSERT INTO Administrator (aID, username, name, password) VALUES ('Admin333','vicgmail.com', 'Vic', 'aaa');
INSERT INTO Comment (pID, uID, commentIssued, content, type) VALUES ('P12345','A00001','2010-12-30', 'Great work', 'positive');
INSERT INTO Comment (pID, uID, commentIssued, content, type) VALUES ('P12345','A00001','2010-12-31', 'Nice! Great work', 'positive');
INSERT INTO Comment (pID, uID, commentIssued, content, type) VALUES ('P12345','B00002','2017-01-30', 'Bad work', 'negative');
INSERT INTO Comment (pID, uID, commentIssued, content, type) VALUES ('P12345','B00002','2010-02-30', 'OK', 'negative');
INSERT INTO Product (pID, name,root, parent,dateIssued,imageURL, description,admin,artist) VALUES ('P1','Doraemon','P1','P1',0,'https://s3.amazonaws.com/ACPimages/doraemon.png', 'My first work of Doraemon','Admin333',"Leon@gmail.com");

INSERT INTO Product (pID, name,root, parent,dateIssued,imageURL, description,admin,artist) VALUES ('P2','Doraemon','P1','P1',0,'https://s3.amazonaws.com/ACPimages/doraemon.png', 'A modified version','Admin333',"Leon@gmail.com");
INSERT INTO Product (pID, name,root, parent,dateIssued,imageURL, description,admin,artist) VALUES ('P3','Doraemon','P1','P2',0,'https://s3.amazonaws.com/ACPimages/doraemon.png', 'My new Doraemon;','Admin333',"Leon@gmail.com");
INSERT INTO Product (pID, name,root, parent,dateIssued,imageURL, description,admin,artist) VALUES ('P4','Doraemon','P1','P2',0,'https://s3.amazonaws.com/ACPimages/doraemon.png', 'Doraemon is a robot who helps people especially his friends','Admin333',"Leon@gmail.com");
INSERT INTO Product (pID, name,root, parent,dateIssued,imageURL, description,admin,artist) VALUES ('P5','Doraemon','P1','P3',0,'https://s3.amazonaws.com/ACPimages/doraemon.png', 'Doraemon is a robot who helps people especially his friends','Admin333',"Leon@gmail.com");
INSERT INTO Product (pID, name,root, parent,dateIssued,imageURL, description,admin,artist) VALUES ('P6','Doraemon','P1','P4',0,'https://s3.amazonaws.com/ACPimages/doraemon.png', 'Doraemon is a robot who helps people especially his friends','Admin333',"Leon@gmail.com");

INSERT INTO Product (pID, name,root, parent,dateIssued,imageURL, description,admin,artist) VALUES ('pp1', 'hand1', 'pp1', 'pp1', 0, 'https://s3.amazonaws.com/ACPimages/dummyb1p1.jpeg', 'Holding hands, so that we can make our world better','Admin333', 'leonzhang1996@126.com');
INSERT INTO Product (pID, name,root, parent,dateIssued,imageURL, description,admin,artist) VALUES ('pp2', 'hand2', 'pp1', 'pp1', 0, 'https://s3.amazonaws.com/ACPimages/dummyb1p2.jpeg','Holding hands,A symbol of friendship and love. We can make our world better','Admin333', 'leonzhang1996@126.com');
INSERT INTO Product (pID, name,root, parent,dateIssued,imageURL, description,admin,artist) VALUES ('pp3', 'hand3', 'pp1', 'pp2', 0, 'https://s3.amazonaws.com/ACPimages/dummyb1p3.jpeg', 'Hand in hands,A symbol of friendship and love. We can make our world better','Admin333', 'leonzhang1996@126.com');
INSERT INTO Product (pID, name,root, parent,dateIssued,imageURL, description,admin,artist) VALUES ('pp4', 'hand4', 'pp1', 'pp3', 0, 'https://s3.amazonaws.com/ACPimages/dummyb1p4.jpeg', 'Hand in hands,A symbol of friendship and love. We can make our world better','Admin333', 'leonzhang1996@126.com');
INSERT INTO Product (pID, name,root, parent,dateIssued,imageURL, description,admin,artist) VALUES ('pp5', 'hand5', 'pp1', 'pp4', 0, 'https://s3.amazonaws.com/ACPimages/dummyb2p1.jpeg', 'Hold my hand and we will make our world a better place','Admin333', 'leonzhang1996@126.com');

INSERT INTO Contribution(pID,uID,amount) VALUES("P1", "Nike",1);
INSERT INTO Contribution(pID,uID,amount) VALUES("P2", "MeiMei",1);
INSERT INTO Contribution(pID,uID,amount) VALUES("P3", "MaMa",1);
INSERT INTO Contribution(pID,uID,amount) VALUES("P4", "BaBa",1);
INSERT INTO Contribution(pID,uID,amount) VALUES("P5", "MeiMei",1);
INSERT INTO Contribution(pID,uID,amount) VALUES("P6", "MeiMei",1);
