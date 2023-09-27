const rotue = require("express").Router();
const User = require("../module/user.module");

const bcrypt = require('bcrypt');
const saltRounds = 10;

rotue.post("/user_signup", async (req, res) => {
  const user = req.body;

  const data = await User.find({ email: user.email });

  if (data.length > 0) {
    res.status(201).json({
      message: 'User already exists'
    });
  } else {
    bcrypt.hash(user.password, saltRounds, async (err, hash) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          error: 'Internal Server Error'
        });
      }

      const newUser = new User({
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        password: hash,
        articles: []
      });

      try {
        await newUser.save(); // Use await here to handle the promise
        res.status(201).json({
          message: 'User created successfully'
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          error: 'Internal Server Error'
        });
      }
    });
  }
});

module.exports = rotue;


