const rotue = require("express").Router();
const User = require("../module/user.module");

const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

const bcrypt = require("bcrypt");
const saltRounds = 10;

rotue.post("/user_signup", async (req, res) => {
  const user = req.body;

  const data = await User.find({ email: user.email });

  if (data.length > 0) {
    res.status(201).json({
      message: "User already exists",
    });
  } else {
    bcrypt.hash(user.password, saltRounds, async (err, hash) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          error: "Internal Server Error",
        });
      }

      const newUser = new User({
        fname: user.fname,
        lname: user.lname,
        email: user.email,
        password: hash,
        articles: [],
      });

      try {
        await newUser.save();
        res.status(201).json({
          message: "User created successfully",
        });

        // Mailer function after user created

        const config = {
          service: "gmail",
          auth: {
            user: "krunaltarale.iceico@gmail.com",
            pass: "zblzoiergfvatxwd",
          },
        };

        let transporter = nodemailer.createTransport(config);

        let MailGenerator = new Mailgen({
          theme: "default",
          product: {
            name: "AIPROFF",
            link: "https://www.aiproff.ai/",
          },
        });

        let response = {
          body: {
            intro:
              "Congratulations on your successful sign-up! We're excited to have you with us.",
            outro: "Looking forward to doing more business",
          },
        };

        let mail = MailGenerator.generate(response);

        let message = {
          from: "krunaltarale.iceico@gmail.com",
          to: user.email,
          subject: "Welcome to AiProff",
          html: mail,
        };

        transporter
          .sendMail(message)
          .then(() => {
            // res.status(201).json({
            //     status: "You should receive an email"
            // })
          })
          .catch((error) => {
            // res.status(500).json({ error })
          });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          error: "Internal Server Error",
        });
      }
    });
  }
});

module.exports = rotue;
