const route = require('express').Router();
const User = require('../module/user.module');

const bcrypt = require('bcrypt');
const saltRounds = 10;

route.post('/updatepassword' , async (req,res) => {
    console.log(req.body);
    const user = req.body;

    bcrypt.hash(user.password, saltRounds, async (err, hash) => {

        const result = await User.updateOne({ _id: user.userid }, { password: hash });

        if(result) {
            res.send({ auth: "Password updated" });
        }
        else{
            res.send({ auth: "Unable to update password" });
        }
    
    });

})

module.exports = route