const router = require("express").Router();
const axios = require("axios");
const token = "EAAZAa1WwYEL0BO0EuZBNZAO3O0pSS2c81kkaRzEGIVCGoEdIIIAOQDxepKPvMd03N4LrsIwX0WSo73IgMaZByXZA6SOtB82OfkLmC7eMSbapWup8cOKnpqucL22SdR6AlbCRjZCX3fwiwLOL2jL3CKd8nZC4JQpqhbiL2cXK4nNTnC541Vp02235iBj86zR7W0NrtV7A690TeGGE165CkuB3A4nJZCwZD";
const mytoken = "krunalt";
const WhatsappModel = require("../module/whatsapp.module");

router.get("/whatsapp-webhook", (req, res) => {
  console.log("hii");
  console.log(req.query["hub"]);
  let mode = req.query["hub.mode"];
  let challenge = req.query["hub.challenge"];
  let token = req.query["hub.verify_token"];

  if (mode && token) {
    if (mode === "subscribe" && token === mytoken) {  
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
});

router.post("/whatsapp-webhook", async (req, res) => {
  try {
    let body_param = req.body;
    // console.log(body_param);

    // To print the object body
    // console.log(JSON.stringify(body_param, null, 2));

    if (body_param.object) {
      if (
        body_param.entry &&
        body_param.entry[0].changes &&
        body_param.entry[0].changes[0].value.messages &&
        body_param.entry[0].changes[0].value.messages[0]
      ) {

        const name = body_param.entry[0].changes[0].value.contacts[0].profile.name;
        let phone_no_id = body_param.entry[0].changes[0].value.metadata.phone_number_id;
        let from = body_param.entry[0].changes[0].value.messages[0].from;
        let msg_body = body_param.entry[0].changes[0].value.messages[0].text.body;

        // console.log(name);
        // console.log(phone_no_id);
        // console.log(from);
        // console.log(msg_body);

      const existingUser = await WhatsappModel.findOne({ phonenumber: from });

      if (existingUser) {

        existingUser.messages.push({ body: msg_body, timestamp: new Date(), action: "recive" });
        await existingUser.save();

      } else {
        // User does not exist, create a new user
        const newUser = new WhatsappModel({
          name: name,
          phoneid: phone_no_id,
          phonenumber: from,
          messages: [{ body: msg_body, timestamp: new Date(), action: "recive" }],
        });
        await newUser.save();
      }

        const url = "https://graph.facebook.com/v17.0/" + phone_no_id + "/messages";
        const accessToken = token;

        const headers = {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        };

        const data = {
          messaging_type: 'whatsapp',
          to: from,
          messaging_product: 'whatsapp',
          text: {
            body: 'Hi, how can I help you?',  
          },
        };

        res.sendStatus(200);

        await axios.post(url, data, { headers });

      } else {
        res.sendStatus(404);
      }
    }
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    res.sendStatus(500); 
  }
});


module.exports = router;
