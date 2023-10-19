const route = require('express').Router();
const User = require('../module/user.module');
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

route.post('/forgetpassword', async (req, res) => {


    const user = await User.find({ email: req.body.username.toLowerCase() });


    if (user.length > 0) {

        res.status(201).json({
          message: 'You should receive an email'
        });

        try {

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
                    name: 'AIPROFF',
                    link: 'https://www.aiproff.ai/'
                }

            })

            let response = {
                body: {
                    intro: "Please click below button to reset your password",
                    action: {
                        button: {
                            color: '#22BC66',
                            text: 'Change Password',
                            link: 'https://www.aiproff.ai/updatepassword/'+user[0]._id
                        }
                    }
                    
                }
            }

            let mail = MailGenerator.generate(response)

            let message = {
                from: "support@aiproff.ai",
                to: user[0].email,
                subject: "Change your password",
                html: mail
            }

            transporter.sendMail(message).then(() => {
            }).catch(error => {
            })
        } catch (err) {
            console.error(err);
            res.status(500).json({ status: 'Internal Server Error' });
        }

    }
     else {
        
        res.status(200).json({
          message: 'User is not exists'
        })

    }
})

module.exports = route