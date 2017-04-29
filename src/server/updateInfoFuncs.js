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

function updateInfo(req,res,next){

  	let username = req.body.username;
	let name = req.body.name;
	let password = req.body.password;
	let status = req.body.status;
	console.log('inside update');
  	db.all("SELECT * FROM User WHERE username=? ", [username], function (err, rows) {
    	if(err){
      		console.log(err);
      		res.send(err);
    	}
    	if (rows.length == 0) {
      		res.send("Sorry, this user does not exits. Please try again!");
    	}

    	if(password != null){
    		db.all("UPDATE User SET password=? WHERE username=?",[bcrypt.hashSync(password, 10),username],function(err){
    				if(err){
    					console.log(err);
    					res.send(err);
    				}
    				else{
    					console.log("Success");
    				}
    			});
        }
      	if(status != null){
    			db.all("UPDATE User SET status=? WHERE username=?",[status, username],function(err){
    				if(err){
    					console.log(err);
    					res.send(err);

    				}
    				else{
    					console.log("Success");
    				}
    			});
      }
      if(name != null){
			db.all("UPDATE User SET name=? WHERE username=?",[name, username],function(err){
				if(err){
					console.log(err);
					res.send(err);

				}
				else{
					console.log("Success");
				}
			});
	  }
      if(username != null){
        db.all("UPDATE User SET username=? WHERE username=?",[username, username],function(err){
          if(err){
            console.log(err);
            res.send(err);
          }
          else{
            console.log("Success");
          }
        });
	  }
    res.send("Success");
  });
}
module.exports = {
	updateInfo: updateInfo
};
