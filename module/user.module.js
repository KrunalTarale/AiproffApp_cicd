const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        fname : String,
        lname : String,
        email : String,
        password : String,
        articles : Array
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User;

