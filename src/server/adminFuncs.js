const crypto = require("crypto");
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
var db = new sqlite3.Database('db.sqlite');
db.serialize();

function isAdmin(username) {
    // check if the given adminName is a vaild admin
    db.all('SELECT * FROM Administrator WHERE username = ?', [adminName], function (err, rows) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        if (rows.length < 1) {
            console.log('not a admin');
            res.send({
              "correct": false,
                "message": 'Sorry, you do not have admin access.'
            });
            return false;
        } else {
            return true;
        }
    });
}

function adminGetPullRequestFuncs (req,res,next) {
    if(req.body == null || req.body.adminName == null){
        // console.log('required info entered'); // will be modified for error page;
        return;
    }
    console.log(req.body);
	var adminName = req.body.username;
    if (isAdmin(adminName) == false) {
        res.send({
          "correct": false,
          "message": 'Sorry, you do not have admin access.'
        });
        return;
    }

	// get all the projects that are assigned to this admin
    db.all('SELECT pID, name, dateIssued, artist, description, imageURL FROM Administrator WHERE username = ? AND isProcessed IS NULL', [adminName], function (err, rows) {
        var result = []
        if (err) {
            console.log(err);
            res.send(err);
        }
        if (rows.length < 1) {
            res.send(result);
            return;
        }
        rows.map(function (row) {
            let product = {
                pID: row.pID,
                name: row.name,
                dateIssued: row.dateIssued,
                imageURL: row.imageURL,
                artist: row.artist,
                description: row.description
            };
            result.push(product);
        });
        console.log(result);
        res.send(result);
        return;
    });
}

function adminGetRequestedProjectFuncs (req,res,next) {
    if(req.body == null || req.body.adminName == null){
        // console.log('required info entered'); // will be modified for error page;
        return;
    }
    console.log(req.body);
    var adminName = req.body.username;
    if (isAdmin(adminName) == false) {
        res.send({
          "correct": false,
          "message": 'Sorry, you do not have admin access.'
        });
        return;
    }

    // get all the projects that are assigned to this admin
    db.all('SELECT pID, name, dateIssued, artist, description, imageURL FROM Administrator WHERE username = ? AND isProcessed IS NULL', [adminName], function (err, rows) {
        var result = []
        if (err) {
            console.log(err);
            res.send(err);
        }
        if (rows.length < 1) {
            res.send(result);
            return;
        }
        rows.map(function (row) {
            let product = {
                pID: row.pID,
                name: row.name,
                dateIssued: row.dateIssued,
                imageURL: row.imageURL,
                artist: row.artist,
                description: row.description
            };
            result.push(product);
        });
        console.log(result);
        res.send(result);
        return;
    });
}



function adminValidateFuncs(req, res, next) {
    if(req.body == null || req.body.adminName == null || req.body.pID == null
        || req.body.decision == null){
        // console.log('required info entered'); // will be modified for error page;
        res.send({
            "correct": false,
            "message": 'Please enter all the informations.'
        });
        return;
    }
    var adminName = req.body.username;
    var pID = req.body.pID;
    var decision = req.body.decision;

    if (isAdmin(adminName) == false) {
        res.send({
          "correct": false,
          "message": 'Sorry, you do not have admin access.'
        });
        return;
    }

    if (decision == 'pass') {
        decision = 1;
    } else {
        decision = null;
    }

    db.all("UPDATE Product SET isProcessed=1, valid=? WHERE pID=?",[decision, pID], function(err){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.send({
                "correct": true,
                "message": 'The product is updated'
            });
        }
    });
}

function projectStarterGetProjects(req, res, next) {
    if(req.params == null || req.params.username == null){
        // console.log('required info entered'); // will be modified for error page;
        return;
    }
    console.log(req.params);

    var username = req.params.username;
    // if (isAdmin(username) == false) {
    //     res.send({
    //       "correct": false,
    //       "message": 'Sorry, you do not have admin access.'
    //     });
    //     return;
    // }

    // get all the projects that are assigned to this admin
    db.all('SELECT distinct p1.pID, p1.name, p1.dateIssued, p1.artist, p1.description, p1.imageURL, p1.root FROM Product p1, Product p2 WHERE p1.artist=? AND p2.pID=p1.root AND p2.artist=p1.artist', [username], function (err, rows) {
        var result = []
        if (err) {
            console.log(err);
            res.send(err);
        }
        if (rows.length < 1) {
            res.send(result);
            return;
        }
        rows.map(function (row) {
            let product = {
                pID: row.pID,
                name: row.name,
                dateIssued: row.dateIssued,
                imageURL: row.imageURL,
                artist: row.artist,
                root: row.root,
                description: row.description
            };
            result.push(product);
        });
        console.log(result);
        res.send(result);
        return;
    });
}

function userGetContributedProducts(req, res, next) {
    if(req.params == null || req.params.username == null){
        // console.log('required info entered'); // will be modified for error page;
        return;
    }
    console.log(req.params);

    var username = req.params.username;
    // if (isAdmin(username) == false) {
    //     res.send({
    //       "correct": false,
    //       "message": 'Sorry, you do not have admin access.'
    //     });
    //     return;
    // }

    // get all the projects that are assigned to this admin
    db.all('SELECT distinct p1.pID, p1.name, p1.dateIssued, p1.artist, p1.description, p1.imageURL, p1.root FROM Product p1, Product p2 WHERE p1.artist=? AND p1.root=p2.pID AND p2.artist<>p1.artist', [username], function (err, rows) {
        var result = []
        if (err) {
            console.log(err);
            res.send(err);
        }
        if (rows.length < 1) {
            res.send(result);
            return;
        }
        rows.map(function (row) {
            let product = {
                pID: row.pID,
                name: row.name,
                dateIssued: row.dateIssued,
                imageURL: row.imageURL,
                artist: row.artist,
                root: row.root,
                description: row.description
            };
            result.push(product);
        });
        console.log(result);
        res.send(result);
        return;
    });
}

function getRecentProducts(req, res, next) {
    db.all('SELECT pID, name, dateIssued, artist, description, imageURL FROM Product ORDER BY dateIssued DESC', function (err, rows) {
        var result = []
        if (err) {
            console.log(err);
            res.send(err);
        }
        if (rows.length < 1) {
            res.send(result);
            return;
        }
        var i = 0;
        while (i < 3 && i < rows.length) {
            result.push({
                pID: rows[i].pID,
                name: rows[i].name,
                dateIssued: rows[i].dateIssued,
                imageURL: rows[i].imageURL,
                artist: rows[i].artist,
                // root: row.root,
                description: rows[i].description
            })
            i = i + 1;
        }
        console.log(result);
        res.send(result);
        return;
    });
}

module.exports = {
	adminGetPullRequestFuncs: adminGetPullRequestFuncs,
    adminValidateFuncs: adminValidateFuncs,
    isAdminFuncs: isAdmin,
    projectStarterGetProjects: projectStarterGetProjects,
    userGetContributedProducts: userGetContributedProducts,
    getRecentProducts: getRecentProducts
};
