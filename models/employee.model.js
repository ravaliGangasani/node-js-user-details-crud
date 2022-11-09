const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    Name: {
        type: String,
    },
    Email: {
        type: String
    },
    Mobile: {
        type: String
    },
    Passowrd: {
        type: String
    },
    Username: {
        type: String
    }
});

User = mongoose.model('User', userSchema);

module.exports = User;