-- User Query
-- create new user
INSERT INTO User(uID, userName, password, status) VALUES(?,?,?,?);

-- get user information by uID
SELECT uID, userName, password, status FROM User WHERE uID=?;

-- get user with username
SELECT uID, userName, password, status FROM User WHERE userName=?;

-- login (check if the result set is not empty)
SELECT * FROM User WHERE userName=? and password=?;

-- change password by uID
UPDATE User SET password=? WHERE uID=?;

-- change status by uID
UPDATE User SET status=? WHERE uID=?;


-- Admin Query
-- create new admin
INSERT INTO Administrator(aID, name, password) VALUES(?,?,?,?);

-- list out all admin
SELECT aID, name, password FROM Administrator;

-- login (check if the result set is not empty)
SELECT * FROM Administrator WHERE name=? and password=?;


-- Product Query
-- create new product
INSERT INTO Product(pID, parent, dateIssued, administrator) VALUES(?,?,?,?);

-- find product by pID
SELECT pID, parent, dateIssued, administrator FROM Product WHERE pID=?;


-- Contribution Query
-- insert into the table
INSERT INTO Contribution(pID, uID) VALUES (?,?);

-- find all the product that one user had contributed
SELECT uID, pID FROM Contribution WHERE uID=?;

-- Archive Query
-- insert into the table
INSERT INTO Archive(pID, archiveTime) VALUES (?,?);


-- Comment Query
-- create new comment
INSERT INTO Comment(pID, uID, commentIssued, content, type) VALUES (?,?,?,?,?);

-- delete existing comment
DELETE FROM Comment WHERE pID=? and uID=? and commentIssued=?;

-- find all the comment from one user by uID
SELECT pID, uID, commentIssued, content, type FROM Comment WHERE uID=?;

-- find all the comment from one product
SELECT ID, uID, commentIssued, content, type FROM Comment WHERE pID=?;