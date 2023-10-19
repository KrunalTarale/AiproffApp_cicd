const route = require('express').Router();
const Subscriber = require('../module/subscribe.module');

const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

route.post('/subscribe_user', async (req, res) => {
    const subscriber = req.body;
    const data = await Subscriber.find({ email: subscriber.email });

    if (data.length === 0) {
        const createdSubscriber = new Subscriber({
            email: subscriber.email,
            status: "unverified",
        });

        try {
            const result = await createdSubscriber.save();

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
                    name: 'Welcome to AIProff',
                    link: 'https://www.aiproff.ai/'
                }
            })

            let response = {
                body: {
                    // name: "AIPROFF",
                    intro: "Thanks for exploring AIProff. To get started, we need to verify your email first.",
                    action: {
                        button: {
                            color: '#22BC66',
                            text: 'Confirm your Email',
                            link: 'https://www.aiproff.ai/updatesubscribeduser/'+result._id
                        }
                    },
                    outro: 'https://www.aiproff.ai/updatesubscribeduser/'+result._id
                }
            }

            let mail = MailGenerator.generate(response)

            let message = {
                from: "support@aiproff.ai",
                to: subscriber.email,
                subject: "Verify Your Email Address",
                html: mail
            }

            transporter.sendMail(message).then(() => {
                res.status(201).json({
                    status: "You should receive an email"
                })
            }).catch(error => {
                res.status(500).json({ error })
            })
        } catch (err) {
            console.error(err);
            res.status(500).json({ status: 'Internal Server Error' });
        }
    } else {
        res.send({
            status: "Already subscribed"
        })
    }
})

module.exports = route;
