const route = require("express").Router();
const User = require("../module/user.module");
const bcrypt = require("bcrypt");

const Jwt = require("jsonwebtoken");
const JwtKey = "e-comm";

route.post("/user_login", async (req, res) => {
  const user = req.body;

  const data = await User.find({ email: user.username.toLowerCase()  });

  if (data.length === 0) {
    res.send({ auth: "incorrect password" });
  } else {
    bcrypt.compare(user.password, data[0].password, function (err, result) {
      if (result === true) {
        const sanitizedResult = data.map((user) => {
          const sanitizedUser = user;
          return sanitizedUser;
        });

        Jwt.sign(
          { sanitizedResult },
          JwtKey,
          { expiresIn: "2h" },
          (err, token) => {
            if (!err) res.send({ sanitizedResult, auth: token });
            else res.send({ auth: "result not found" });
          }
        );
      } else {
        res.send({ auth: "incorrect password" });
      }
    });
  }
});

module.exports = route;
