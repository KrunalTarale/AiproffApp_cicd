const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema(
    {
        article : String,
        title : String,
        date : String,
        url : String
    }
)

const userSchema = new mongoose.Schema(
    {
        fname : String,
        lname : String,
        email: {
            type: String,
            lowercase: true,
        },
        password : String,
        articles : [articleSchema]
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User;

