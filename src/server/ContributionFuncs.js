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

function contribution_check(req,res,next){
  var uid = req.params.uid;
  var note = {
    error: true,
    massage: null,
    isroot: false,
    root: null,
    nodes: null
  }
  if(uid != null){
    db.all("SELECT p2.pID, p2.name,u.name as artist FROM Product p, Contribution c, Product p2, User u WHERE c.uID = ? AND c.pID=p.pID AND p.imageURL is NULL AND p2.pID=p.parent AND u.username=p2.artist",[uid],function(err,rows){
      if(err){
        console.log(err);
        note.massage = "Unexpected";
        res.send(note);
      }else{
        console.log(rows)
        note.error = false;
        note.nodes = rows;
        res.send(note);
      }
    });
  }else{
    note.message = "uid is empty";
    res.send(note);
  }
}
module.exports = {
	contribution_check: contribution_check
};
