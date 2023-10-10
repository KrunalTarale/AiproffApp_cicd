const rotue = require("express").Router();
const User = require("../module/user.module");
const Subscriber = require('../module/subscribe.module');

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

        // Add the user in subscribe collection

        const data = await Subscriber.find({ email: user.email });

        if (data.length === 0) {
            const createdSubscriber = new Subscriber({
                email: user.email,
                status: "verified",
            });
            createdSubscriber.save();
        }

        // Add the user in subscribe collection logic ends hear

        // Mailer function after user created

        const config = {
          host: "smtpout.secureserver.net",
          port: 465,
          secure: true,
          auth: {
              user: "support@aiproff.ai",
              pass: process.env.EMAIL_PASS,
          },
      }

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
          from: "support@aiproff.ai",
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
