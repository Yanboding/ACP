const crypto = require("crypto");
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db.sqlite');
db.serialize();
function addCommentFunc(req,res,next){


	var loginUser = req.body.uID;
	console.log(loginUser);
	var content = req.body.content;
	var type = req.body.type;

	var pid = req.params.pID;
	console.log(pid);

	if (loginUser == null) {
		res.send({
          "correct": false,
          "msg": "You have to login first!"
        });
        return;
	}
	if (content == null || type == null) {
		res.send({
          "correct": false,
          "msg": "You have to put some comment with a type!"
        });
        return;
	}

	// check if the pID exist
	db.all("SELECT * FROM Product WHERE pID=?", [pid], function (err, rows) {
		if (err) {
			console.log(err);
			res.send(err);
			return;
		}
		if (rows.length != 1) {
			res.send({
	          "correct": false,
	          "msg": "Something is wrong, are you trying to hack??!"
	        });
	        return;
		}
		return;
	});
	// check if the logged in user is actually a user in our database
	db.all("SELECT * FROM User WHERE uID=?", [loginUser], function (err, rows) {
		if (err) {
			console.log(err);
			res.send(err);
			return;
		}
		if (rows.length != 1) {
			res.send({
	          "correct": false,
	          "msg": "Something is wrong, are you trying to hack??!"
	        });
	        return;
		}
		return;
	});
	// TODO find a way to get time in right format
	db.run('INSERT INTO Comment(pID, uID, commentIssued, content, type) VALUES (?,?,?,?,?);',
			[pid, loginUser, Date.now(), content, type], function (err) {
				console.log(err)
	});

	res.send({
      "correct": true,
      "msg": "Comment inserted!"
    });

}

module.exports = {
	addCommentFunc: addCommentFunc
};
