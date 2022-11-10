const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.post('/', (req, res) => {
    var user = new User();// user instance created
    user.Name = req.body.name;
    user.Email = req.body.email;
    user.Mobile = req.body.mobile;
    user.Password = req.body.password;
    user.Username = req.body.username;
    user.save((err, doc) => {
        if (!err)  {
            res.send(doc)
            
        } else{
            res.send("error while saving user" + err)
        }
    });
});

router.get('/list', (req, res) => {
    User.find((err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.send('Error in retrieving users list :' + err);
        }
    });
});


router.get('/delete/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send("user deleted")
        }
        else {res.send('Error in user delete :' + err); }
    });
});

module.exports = router;