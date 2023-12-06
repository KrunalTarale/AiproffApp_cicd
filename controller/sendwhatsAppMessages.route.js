const route = require('express').Router();
const WhatsappModel = require('../module/whatsapp.module');
const axios = require("axios");
const token =
  "EAAZAa1WwYEL0BO8l9lOKwCspmpifZAgi7Qfn1tBwORWTL8jhWVBcl7c8FZC4hIoroZAnKLmXEjsDw5SN6ZCrn6pUOmeGOXUa6m42xMTd1ipnRAvZAVb3iIPZBO2rxZC0V25a7PCJtgZAZBWlc4MuX2GId2TQM2YIGurjMrVf0l8vKUi6NAAYZCMjZCFSdeOMy6bRyhLDKwx1DsgocW6ZA9ttwg61ZCcswbGwkZD";


route.post("/send-whatsapp-message", async (req, res) => {

    console.log(req.body);

    const url =
    "https://graph.facebook.com/v17.0/185315941321665/messages";
  const accessToken = token;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  const data = {
    messaging_type: "whatsapp",
    to: req.body.phonenumber,
    messaging_product: "whatsapp",
    text: {
      body: req.body.message,
    },
  };

  res.sendStatus(200);

  await axios.post(url, data, { headers });

  
     // console.log(JSON.stringify(response.data));
    const existingUser = await WhatsappModel.findOne({ phonenumber: req.body.phonenumber });
    existingUser.messages.push({ body: req.body.message, timestamp: new Date(),action : "send" });
    await existingUser.save();

    // res.sendStatus(200);
  
  });

module.exports = route