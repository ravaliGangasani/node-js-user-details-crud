const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.post('/', (req, res) => {
        insertRecord(req, res);
});


function insertRecord(req, res) {
    var user = new User();
    user.Name = req.body.fullName;
    user.Email = req.body.email;
    user.Mobile = req.body.mobile;
    user.Password = req.body.password;
    user.Username = req.body.username;
    user.save((err, doc) => {
        if (!err)  {
            console.log("user added successfully" + doc)
        } else{
            console.log("error while saving user")
        }
    });
}


router.get('/list', (req, res) => {
    User.find((err, docs) => {
        if (!err) {
            return docs
        }
        else {
            return console.log('Error in retrieving employee list :' + err);
        }
    });
});


router.get('/delete/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            return console.log("deleted")
        }
        else { console.log('Error in employee delete :' + err); }
    });
});

module.exports = router;