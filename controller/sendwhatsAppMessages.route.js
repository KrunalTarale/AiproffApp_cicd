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
      'Authorization': 'Bearer EAAZAa1WwYEL0BO0EuZBNZAO3O0pSS2c81kkaRzEGIVCGoEdIIIAOQDxepKPvMd03N4LrsIwX0WSo73IgMaZByXZA6SOtB82OfkLmC7eMSbapWup8cOKnpqucL22SdR6AlbCRjZCX3fwiwLOL2jL3CKd8nZC4JQpqhbiL2cXK4nNTnC541Vp02235iBj86zR7W0NrtV7A690TeGGE165CkuB3A4nJZCwZD', 
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