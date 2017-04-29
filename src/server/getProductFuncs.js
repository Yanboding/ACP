
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db.sqlite');
db.serialize();

function getProductFunc(req,res,next){
	var id = req.query.pID;
	var name = req.query.name;
	var artist = req.query.artist;
	var date = req.query.date;

	console.log(id);
	console.log(name);
	if(id!=null) {

		db.all("SELECT pID, Product.name, root, parent, dateIssued, imageURL,admin, User.name AS artist,description FROM Product, User WHERE pID=? AND Product.artist = User.username", [id], function (err, rows) {
			if(err){
				console.log(err);
				res.send(err);
			}
			if(rows.length < 1){
				console.log("Such product does not exist");
				res.send([]);
				return;
			}
			res.json(rows[0]);
		});
	}else if (name!=null) {

		db.all("SELECT pID, name, root, parent, dateIssued, imageURL,admin,artist,description FROM Product WHERE name=?", [name], function (err, rows) {
			var result = [];
			if (err) {
				console.log(err);
				res.send(err);
			}
			if (rows.length < 1) {
				console.log("Such product does not exist");
				res.send(result);
				return;
			}
			rows.map(function (row) {

				let product = {
					pID: row.pID,
					name: row.name,
					root: row.root,
					parent: row.parent,
					dateIssued: row.dateIssued,
					imageURL: row.imageURL,
					admin: row.admin,
					artist: row.artist,
					description: row.description

				};
				result.push(product);
			});
			console.log(result);
			res.send(result);
			return;

		});
		return;

	}else if (artist!=null) {

		db.all("SELECT pID, name, root, parent, dateIssued, imageURL,admin,artist,description FROM Product WHERE artist=?", [artist], function (err, rows) {
			var result = [];
			if (err) {
				console.log(err);
				res.send(err);
			}
			if (rows.length < 1) {
				console.log("Such product does not exist");
				res.send(result);
				return;
			}
			rows.map(function (row) {

				let product = {
					pID: row.pID,
					name: row.name,
					root: row.root,
					parent: row.parent,
					dateIssued: row.dateIssued,
					imageURL: row.imageURL,
					admin: row.admin,
					artist: row.artist,
					description: row.description

				};
				result.push(product);
			});
			console.log(result);
			res.send(result);
			return;

		});
		return;

	}else if (date!=null) {

		db.all("SELECT pID, name, root, parent, dateIssued, imageURL,admin,artist,description FROM Product WHERE dateIssued=?", [date], function (err, rows) {
			var result = [];
			if (err) {
				console.log(err);
				res.send(err);
			}
			if (rows.length < 1) {
				console.log("Such product does not exist");
				res.send(result);
				return;
			}
			rows.map(function (row) {

				let product = {
					pID: row.pID,
					name: row.name,
					root: row.root,
					parent: row.parent,
					dateIssued: row.dateIssued,
					imageURL: row.imageURL,
					admin: row.admin,
					artist: row.artist,
					description: row.description

				};
				result.push(product);
			});
			console.log(result);
			res.send(result);
			return;

		});
		return;

	}



	/*

	 */
}
module.exports = {
	getProductFunc: getProductFunc
};
