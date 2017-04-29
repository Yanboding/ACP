const fs = require('fs');

var correctAnswer = 1;


const S3FS = require('s3fs');
const crypto = require("crypto");// Use crypto for generating pID or uID
const s3fsImpl = new S3FS('ACPimages',{
    accessKeyId:'AKIAJHQYUJWVBZ5MUPRA',
    secretAccessKey:'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'
});
s3fsImpl.create();

const session = require('express-session');
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db.sqlite');
db.serialize();

function getProfile(req,res,next){
	let uid = req.query.uID;
	let username = req.query.username;
	let status = req.query.status;
	if(uid!=null) {
		db.all("SELECT uID, name, password, status FROM User WHERE uID=?", [uid], function (err, rows) {
			if(err){
				console.log(err);
				res.send(err);
			}
      if(rows.length == 0){
        res.send("Sorry, this user does not exits. Please try again!");
      }
			else{
				var user = {
					"id": rows[0].uID,
					"username": rows[0].name,
					"password": rows[0].password,
					"status": rows[0].status
				};
				res.send(user);
			}
		});
	}else if(username!=null){
			db.all("SELECT uID, name, password, status FROM User WHERE username=?",[username],function(err,rows) {
				if(err){
					console.log(err);
					res.send(err);
				}
				if (rows.length == 0){
					res.send("Sorry, no such user exits. Please try again!");
					return;
				}
				console.log(rows);
				res.send(rows);

			});
	}else if (status!=null){
		db.all("SELECT uID, name, password, status FROM User WHERE status=?", [status], function (err, rows) {
			if(err){
				console.log(err);
				res.send(err);
			}
      if (rows.length == 0){
        res.send("Sorry, no such status exits. Please try again!");
        return;
      }
			res.send(rows);
		});
	}
	else{
		console.log("You didn't specify either uID or username!");
		res.send("You didn't specify uID, username or status!");
	}

}
module.exports = {
	getProfile: getProfile
};
