const crypto = require("crypto");
const sqlite3 = require('sqlite3').verbose();
const session = require('express-session');
const bcrypt = require('bcryptjs');
var db = new sqlite3.Database('db.sqlite');
db.serialize();

function getCommentFunc(req,res,next){
	var result = [];

		// find all the commetns that are given to one product by pID
        var pID = req.params.pID;
		db.all('SELECT * FROM Comment WHERE pID=?',[pID],function(err,rows) {
			if(err) {
				throw err;
			}
			if (rows.length == 0 ) {
				res.send('This product does not any comments');
				return;
			}

			rows.map(function(row) {
				let comment = {
					pID: row.pID,
					uID: row.uID,
					commentIssued: row.commentIssued,
					content: row.content,
					type: row.type
				};
				result.push(comment);

			});

			res.json(result);
			return;
		});

}

module.exports = {
	getCommentFunc: getCommentFunc
};
