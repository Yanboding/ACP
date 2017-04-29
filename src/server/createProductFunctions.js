const fs = require('fs');
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

function createProduct(req,res,next){
	var pID = crypto.randomBytes(8).toString("hex");
	console.log(req.body);
  var uid = req.body.uid;

	var name = req.body.name;
   var parent = req.body.parent; // need to add at create product page
	var artist = req.body.artist;
	var description  =  req.body.description;


	var path = req.body.path;
    var note = {

      error: true,
      message: '',
    };
    //This is a new project
    if(parent == 'root'){
      db.run('INSERT INTO Product(pID,name, root, parent,dateIssued,imageURL,artist,description) VALUES (?,?,?,?,?,?,?,?);',[pID,name,pID,pID,Date.now(),path,artist,description],function(err){
        if(err){
          note.message = err;
          res.send(note);
        }
        else{
          db.run('INSERT INTO Contribution(pID, uID) VALUES (?,?);',[pID,uid],function(err){
            if(err){
              note.message = "Unexpected Error4";
              res.send(note);
            }
            else{
              note.error = false;
              note.message = "Enjoy";
              res.send(note);
            }
      });
    }
  });
}
    // This is download
   else if(path == null){
     db.all('SELECT * FROM Product WHERE imageURL is NULL AND parent=? AND artist=?',[parent,artist], function(err,rows){
       if(err){
         console.log(err)
         note.message = "Unexpected Error1";
         res.send(note);
       }else if(rows.length == 0){
         db.all('SELECT root FROM Product WHERE pID=?',[parent], function(err,rows){
           if(err || rows.length < 1){
             note.message = "Unexpected Error2";
             res.send(note);
           }else{
             var root = rows[0].root;
             db.run('INSERT INTO Product(pID,root, parent,artist) VALUES (?,?,?,?);',[pID,root,parent,artist],function(err){
               if(err){
                 note.message = "Unexpected Error3";
                 res.send(note);
               }else {
                 db.run('INSERT INTO Contribution(pID, uID) VALUES (?,?);',[pID,uid],function(err){
                   if(err){
                     console.log("there")
                     note.message = "Unexpected Error4";
                     res.send(note);
                   }
                  else{
                    note.error = false;
                    note.message = "Enjoy";
                    res.send(note);
                  }
                 });
               }
             });
           }
         });
       }
       else{
       note.error = false;
       note.message = "You just download again";
       res.send(note);
     }
   // This is upload
 });
}else{
     db.run('UPDATE Product SET imageURL= ?, name=?, description=?, dateIssued=? WHERE imageURL is NULL AND parent=? AND artist=?',[path,name,description,Date.now(),parent,artist],function(err){
       if(err){
         console.log(err)
         note.message = "Unexpected Error5";
         res.send(note);
       }
       else{
         console.log('yes')
         note.error = false;
         note.message = "Success";
         res.send(note);
       }
     });
   }

}
function uploadImageFunc(req,res,next) {

		var file = req.files.file;
		console.log(file);
		//Create a file stream
		var stream = fs.createReadStream(file.path);

		//writeFile calls putObject behind the scenes
		return s3fsImpl.writeFile(file.name, stream).then(function () {
			fs.unlink(file.path, function (err) {
				if (err) {
					console.error(err);
				}
			});
			res.redirect('/main');
		});
}

module.exports = {
	createProduct: createProduct,
  uploadImageFunc:uploadImageFunc
};
