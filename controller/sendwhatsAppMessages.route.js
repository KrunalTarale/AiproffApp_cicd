const route = require('express').Router();
const WhatsappModel = require('../module/whatsapp.module');
const axios = require("axios");

route.post("/send-whatsapp-message", (req, res) => {

    console.log(req.body);
  
    let data = JSON.stringify({
    "messaging_type": "whatsapp",
    "to": req.body.phonenumber,
    "messaging_product": "whatsapp",
    "text": {
      "body": req.body.message
    }  
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://graph.facebook.com/v17.0/'+ req.body.phoneid +'/messages',
    headers: { 
      'Authorization': 'Bearer EAAZAa1WwYEL0BOZCDwWNJkEaMZA7DIq3c2ItmLgZCRwxS9HKGdJbGTubJ9yd4B1zPoN7IMiKtvEcrRL6XcE4N5yZAUKtqkkAUUXK5djQJazbJbcDvy6YGXdRQQ0Sr4uyxZAt66dfjacrk6yRof5IJNzzxJC0oETZAk6ScREyZAmypkkSNsnQBd86EbtxKbzfJ5FEdtpHYucqgcPAhVDAMZAtmXBhKTexI', 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios.request(config)
  .then( async(response) => {
    // console.log(JSON.stringify(response.data));
    const existingUser = await WhatsappModel.findOne({ phonenumber: req.body.phonenumber });
    existingUser.messages.push({ body: req.body.message, timestamp: new Date(),action : "send" });
    await existingUser.save();

    res.status(200).json({
      success: true
    })
  })
  .catch((error) => {
    console.log(error);
  });
  
  });

module.exports = route