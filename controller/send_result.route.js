const route = require('express').Router();
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

route.post('/send_result', async (req, res) => {
    const resp = req.body;
  
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
    });
  
    const tableData = resp.questions.map((question, index) => ({
      sr_no: index + 1,
      correct_ans: question.answer,
      selected_ans: resp.answers[index]
    }));
  
    let response = {
      body: {
        // name: "AIPROFF",
        intro: "Assessment Result. Your Score is " + resp.score + " out of "+resp.outoff,
        table: {
          data: tableData
        },
        outro: "Thanks for attempting. Reach out to us for more such assessments.",
      }
    };
  
    let mail = MailGenerator.generate(response);
  
    let message = {
      from: "support@aiproff.ai",
      to: resp.email,
      subject: "Assessment Result",
      html: mail
    };
  
    transporter.sendMail(message).then(() => {
      res.status(200).json({
        message: "You have been sent an email"
      });
    }).catch(error => {
      return res.status(500).json({
        status: "Internal Server Error"
      });
    });
  });
  

module.exports = route;
