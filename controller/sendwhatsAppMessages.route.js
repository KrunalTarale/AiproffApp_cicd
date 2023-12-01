const route = require('express').Router();
const WhatsappModel = require('../module/whatsapp.module');
const axios = require("axios");
const token =
  "EAAZAa1WwYEL0BOZB5QC8Oo6ekJcpFxQldVw5j4oHMUOq9AZAvKNodw8TqGoEPcuEAgSszVJeWpMlTsIEwupc7cQulIhIxqtxBgUSVCtFZACQ6ftMZAgyoKQpZBqRRTLCGJ8T774Ia7lCBXQ9lRGoIhSHXzrWl5gEEHrM6g2BH8doihQqkWW2Vk7msailgYXLOoXHHPEz9XnlwqqJ9lW3ubsznbCVIZD";


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