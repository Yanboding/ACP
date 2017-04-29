const crypto = require("crypto");
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
var db = new sqlite3.Database('db.sqlite');
db.serialize();
function validateEmail(email) {
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    return re.test(email);
}

function registerFunc(req,res,next) {
    if(req.body == null || req.body.username == null || req.body.password == null
        || req.body.name == null || req.body.status == 'None'){
        console.log('required info entered'); // will be modified for error page;
        return;
    }
    console.log(req.body);
	var uID = crypto.randomBytes(8).toString("hex");
    var status = req.body.status;
	var username = req.body.username;
	var password = req.body.password;
    var name = req.body.name;
	var question = req.body.question;
	var answer = req.body.answer;
    console.log(uID);
    // checking user's input
    if(!validateEmail(username)){
        res.send({
            "correct": false,
            "message": 'Email format is incorrect!'
        });
        return;
    }
    if (password.length <= 4) {
        res.send({
            "correct": false,
            "message": 'The password length must be greater or equal to 5!'
        });
        return;
    }
    if (answer.length < 1) {
        res.send({
            "correct": false,
            "message": 'Please enter an answer to the sercurity question!'
        });
        return;
    }
    if (name.length < 1) {
        name = username;
    }

	// add new user to the database
    db.all('SELECT * FROM User WHERE username = ?', [username], function (err, rows) {
        if (rows.length > 0) {
            console.log('user already exists');
            res.send({
              "correct": false,
            	"message": 'Sorry, the user already exists!'
            });
            return;
        }
        var hash_password = bcrypt.hashSync(password, 10);
        console.log(hash_password);

        db.run('INSERT INTO User(uID, username, name, password, status,question,answer) VALUES(?, ?, ?, ?, ?,?,?)',
            [uID, username, name,  hash_password, status,question,answer], function (err) {
                console.log(err);
        });

		res.send({
          "correct": true,
          "message": 'Successfully registered, you can login using your username and password now!'
        });
    });
}

module.exports = {
	validateEmail: validateEmail,
	registerFunc: registerFunc
};
