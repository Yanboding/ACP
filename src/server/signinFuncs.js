  const crypto = require("crypto");
  const sqlite3 = require('sqlite3').verbose();
  const session = require('express-session');
  const bcrypt = require('bcryptjs');
  var db = new sqlite3.Database('db.sqlite');
  db.serialize();

  function signIn(req,res,next){
    var reqUsername = req.body.username;
    var reqPassword = req.body.password;
    var note = {
      correct: false,
      msg: null,
      aID: null,
      uID: null
    };
    if (reqUsername == "" || reqPassword == "") {
      note.msg = "Please type both your username and password!";
      res.send(note);
      return;
    }

    if (isAdmin(reqUsername) == true) {
      //  sign in as  administrator
      console.log("Admin logging in");
      db.all('SELECT aID, username, password, name FROM Administrator WHERE username = ?',[reqUsername],function(err,rows){
        if(err) {
          throw err;
        }
        if(!rows || rows.length > 1) {
          throw "error on getting rows" ;
        }

        // Used hash to check password
        // bcrypt.compareSync(reqPassword, rows[0].password)
        if(rows.length == 1 && rows[0].password == reqPassword) {
          console.log("password matches");
          note.correct = true;
          note.aID = rows[0].aID;

          res.send(note);
          return;
        } else {
          console.log("password does not match");
          note.msg = "Your username and password do not match, Please try again!";

          res.send(note);
          return;
        }
      });
    } else {  // not admin
      console.log("User logging in");
       //  sign in as normal client
      db.all('SELECT uID, username, password,name FROM User WHERE username = ?',[reqUsername], function(err, rows) {
        if(err) {
          throw err;
        }
        if(!rows || rows.length > 1) {
          throw "error on getting rows; Multiple users exisit which is unlikely" ;
        }
        // Used hash to check password
        if(rows.length == 1 && bcrypt.compareSync(reqPassword, rows[0].password)) {

          note.correct = true
          note.uID = rows[0].uID;
          console.log('Successfully signed in');
              res.send(note);// For POSTMAN testing purpose; Will modify this to redirect after front end page is ready
          return;
        } else {
          note.msg = "Your username and password do not match, Please try again!";
          res.send(note);
          return;
        }
      });
    }
  }

  function isAdmin(username) {

    if (!(username.indexOf('@') > -1)) {
      return true;
    } else {
      return false;
    }
  }

  module.exports = {
  	signIn: signIn
  };
