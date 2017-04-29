
const fs = require('fs');

var correctAnswer = 1;

const S3FS = require('s3fs');
const crypto = require("crypto");// Use crypto for generating pID or uID
const s3fsImpl = new S3FS('ACPimages',{
    accessKeyId:'AKIAJHQYUJWVBZ5MUPRA',
    secretAccessKey:'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'
});
s3fsImpl.create();

// const session = require('express-session');
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('db.sqlite');
db.serialize();

const testFunctions = require('./testFunctions');
const addCommentFunctions = require('./addCommentFuncs');
const registerFunctions = require('./registerFunctions');
const signinFunctions = require('./signinFuncs');
const createProductFunction = require('./createProductFunctions');
const getCommentFuncs = require('./getCommentFuncs');
const getProfileFuncs = require('./getProfileFuncs');
const updateInfoFuncs = require('./updateInfoFuncs');
const getProductFuncs = require('./getProductFuncs');
const hisTreeFuncs = require('./histreeFuncs');
const ContributionFuncs = require('./ContributionFuncs');
const adminFuncs = require('./adminFuncs');

function validateEmail(email) {
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    return re.test(email);
}


function pageNotFound(req, res, next) {
	let error_object = {
		err: 'Bad request: no such API'
	};
	res.send(error_object)
}


function addCommitFunc(req,res,next){
	// Normal users are able to add new version of a product
	// Product can only be created by admin;
	var aID = req.body.id;
	var root = req.body.root;
	var name = req.body.name;
	var parent = req.body.parent;
	var pID = req.body.pID;
	var dateIssued = req.body.date;
	var file = '';

	db.all('SELECT aID FROM Administrator WHERE aID = ?',[aID],function(err,rows) {
		if (rows.length == 0) {
			console.log('user does not exist');
			res.send('Failed: user does not exist');
            return;
		}

		db.run('INSERT INTO Product(pID, root, parent, dateIssued, imagePath,admin) VALUES (?,?,?,?,?);',
			[pID,root, parent, dateIssued, file, aID], function (err) {
				console.log(err)
			});
		res.send('Success'); // send string for now but will modify this if decides to re-render to another page
	});

}


function hisTreeFunc(req,res,next){
	var name = req.params.name;
  var note = {
    error: true,
    massage: null,
    isroot: false,
    nodes: null
  }
	if(name!=null) {
		db.all("SELECT root, imageURL FROM Product WHERE name=?", [name], function (err, rows) {
			if(err){
        console.log(err);
				note.massage = "Unexpected";
				res.send(note);
        return;
			}
			if(rows.length < 1){
				console.log("Such product does not exist");
        note.massage = "Such product does not exist";
				res.send(note);
                return;
			}
      if(rows[0].root == "Start"){
        note.error = false;
        note.massage = "Success, This is root";
        note.isroot = true;
        note.nodes = rows[0];
        res.send(note);
        return;
      }
      db.all("SELECT parent, imageURL FROM Product WHERE root=? and parent<>?",[rows[0],name],function(err,rows){
        if(err||rows.length==0){
          console.log("Unexpected Error!");
          note.error = true;
          note.massage = "Unexpected"
          res.send(note);
        }else{
          note.error = false;
          note.massage = "Success, This is not root";
          note.nodes = rows;
          res.send(note);
        }
      }) // response as a list of products that have the same name,root and admin
		});
	}
}


function deleteProduct(req,res,next){
	var pID = req.params.pID;
	var admin = req.params.admin;
	if(pID!=null && admin!=null ) {
		db.all("SELECT * FROM Product WHERE pID=? AND admin=?", [pID,admin], function (err, rows) {
			if (err) {
				console.log(err);
				res.send(err);
			}
			if (rows.length != 1) {
				console.log("Either your admin is incorect or your pID is incorrect");
				res.send("Either your admin is incorect or your pID is incorrect");
				return;
			}
			db.run('DELETE FROM Product WHERE pID=? AND name=? AND dateIssued=?', [pID, rows[0].name, rows[0].dateIssued], function (err, rows) {
				if (err) {
					console.log(err);
					res.send(err);
					return;
				}
				if (rows.length < 1) {
					console.log("This shouldn't happen");
					console.log("Such comments does not exist");

					return;
				}
				res.send('Success');
			});
		});
	} else if (admin == null){
		res.send("adminID is missing");
	}
	else{
		res.send("pID is missing, You are probably entering an URL with a wrong pID");
	}
}

function deleteComment(req,res,next){
	var pID = req.params.pID;
	var uID = req.params.uID;
	if(pID!=null && uID!=null ) {
		db.all("SELECT * FROM Product WHERE pID=? AND admin=?", [pID, uID], function (err, rows) {
			if (err) {
				console.log(err);
				res.send(err);
			}
			if (rows.length != 1) {
				console.log("Either your admin is incorect or your pID is incorrect");
				res.send("Either your admin is incorect or your pID is incorrect");
				return;
			}
			db.run('DELETE FROM Comment WHERE pID=? and uID=? and commentIssued=?', [pID, uID, rows[0].commentIssued], function (err, rows) {
				if (err) {
					console.log(err);
					res.send(err);
					return;
				}
				if (rows.length < 1) {
					console.log("This shouldn't happen");
					console.log("Such comments does not exist");

					return;
				}
				res.send('Success');
			});
		});
	}
	else{
		res.send("pID is missing, You are probably entering an URL with a wrong pID");
	}
}

function checkQuestionPassword(req, res, next) {
	var username = req.body.username;
	var question = req.body.question;
	var answer = req.body.answer;
  	console.log(req.body);
	if (username != "") {
		db.all("SELECT question, answer FROM User WHERE username=?", [username], function(err, rows) {
			if (err) {
				console.log(err);
				res.send(err);
			}
			if (rows.length == 0) {
      			res.send({
              "correct": false,
              "msg":"Sorry, this user does not exits. Please try again!"});
      			return;
			} else {
				// check question and answer
				if (rows[0].question == question && rows[0].answer == answer) {
					correctAnswer = 2;
					res.send({
            "correct": true,
            "msg":"Question and answer matches"});
					return;
				} else {
					res.send({
            "correct": false,
            "msg":"Sorry, the question and answer do not match with the database"});
					return;
				}
			}
		});
	} else {
		res.send({
      "correct": false,
      "msg":"Please enter your user name"});
		return;
	}
}


function resetPassword(req, res, next) {
	var username = req.body.username;
	var password1 = req.body.password1;
	var password2 = req.body.password2;
  console.log(req.body);
	if (correctAnswer == 2) {
		if (password1 != null && password1 == password2) {
			db.all("UPDATE User SET password=? WHERE username=?", [bcrypt.hashSync(password1, 10), username], function(err){
    			if(err){
    				console.log(err);
    				res.send(err);
    			}
    			else{
    				correctAnswer = 1;
    				res.send({"correct":true,
                "msg":"Password reset!"});
    			}
    		});
		} else {
			res.send({"correct":false,
          "msg":"Sorry, please enter the same password twice"});
			return;
		}
	} else {
		res.send("Please check your question and answer");
	}
}


function checkUserName(req,res,next) {
    if (req.body == null || req.body.username == null) {
        console.log('required info entered'); // will be modified for error page;
        return;
    }
    var username = req.body.username;
    if(!validateEmail(username)){
		res.send({
			"correct": false,
			"exist":true,
			"message": 'Username should be a valid email address!'
		});
		return;
	}
    console.log(req.body);
	// add new user to the database
    db.all('SELECT * FROM User WHERE username = ?', [username], function (err, rows) {
        if (rows.length > 0) {
            console.log('User already exists');

            res.send({
            	"correct": false,
              	"exist": true,
            	"message": 'Username already exists!'
            });
            return;
        } else {
        	console.log('User name available ');
			res.send({
      			"correct": false,
      			"exist": true,
      			"message": 'Username is available :)'
    		});
    		return;
        }
    });
	// Supposed to redirect to profile page, but use send response for testing purpos
}
function Download(req,res,next){

	var pID = crypto.randomBytes(16).toString("hex");
	var name = req.body.name;
	var parent = req.body.parent;
	var root = req.body.root;


	db.all('SELECT * FROM Product WHERE name = ?',[name],function(err,rows) {
		if (rows.length > 0) {
			console.log('Product already exist');
			res.send('Failed: user does not exist');
			return;
		}

		db.run('INSERT INTO Product(pID, root, parent, dateIssued, imagePath,admin) VALUES (?,?,?,?,?);',
			[pID,root, parent, 'new', '','Admin55555' ], function (err) {
				console.log(err)

			});
		res.send('Successfully pulled'); // send string for now but will modify this if decides to re-render to another page
	});
}

function setup(app) {

	var testFunc = testFunctions.testFunc;
	var testPrintWithCallback = testFunctions.testPrintWithCallback;

    app.all('/test_fake_histree/:pID', testFunctions.fakeHistree);

    app.all('/test_fake_search', testFunctions.fakeSearch);

    app.all('/test_fake_product', testFunctions.fakeProduct);

	app.all('/test_print_with_callback', testPrintWithCallback);

	app.get('/test_api', testFunc);


	// Deliverable 3
	app.post('/checkUserName', checkUserName);
	app.post('/register', registerFunctions.registerFunc);// done
	app.post('/test_upload',createProductFunction.uploadImageFunc); //done
	app.get('/profile', getProfileFuncs.getProfile); //done
	// can search by uID, username and status

	app.get('/comment/:pID',getCommentFuncs.getCommentFunc); //done
	// can search comment by uID or pID

	app.get('/product',getProductFuncs.getProductFunc);
	app.get('/product/:name',getProductFuncs.getProductFunc);
	app.get('/product?name=name',getProductFuncs.getProductFunc);
	app.get('/product?artist=artist',getProductFuncs.getProductFunc);
	app.get('/product?date=date',getProductFuncs.getProductFunc);//done
	// This URL is able to replace the functionality of histree;

  app.get('/contribution_check/:uid', ContributionFuncs.contribution_check);
	app.get('/histree/:pID',hisTreeFuncs.hisTreeFunc); // done
	app.post('/pull', createProductFunction.createProduct);
	app.post('/add_comment/:pID/:name',addCommentFunctions.addCommentFunc); // done
	app.post('/product', createProductFunction.createProduct); //done


	app.post('/add_commit',addCommitFunc); //done
    app.post('/login',signinFunctions.signIn); // partially done

    app.put('/update',updateInfoFuncs.updateInfo); // done
    app.post('/checkanswer', checkQuestionPassword);
    app.post('/resetpassword', resetPassword); // done
	app.delete('/comment/:uid/:pid', deleteComment);
	app.delete('/product/:pid/:admin', deleteProduct);

	// admin functions
	app.get('/adminrequests', adminFuncs.adminGetPullRequestFuncs);
	app.post('/adminvalidate', adminFuncs.adminValidateFuncs);

	// user functinos
	app.get('/getProjects/:username', adminFuncs.projectStarterGetProjects);
	app.get('/getContributedProducts/:username', adminFuncs.userGetContributedProducts);
	app.get('/main', testFunc);
    // Supposed to sync with front-end, Will address this unsolved problem at next meeting

    app.get('/getRecentProducts', adminFuncs.getRecentProducts);
	app.all('*', pageNotFound);


}

module.exports = {
	setup: setup
};
