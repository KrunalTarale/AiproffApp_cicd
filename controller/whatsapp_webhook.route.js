const router = require("express").Router();
const axios = require("axios");
const token =
  "EAAZAa1WwYEL0BO8l9lOKwCspmpifZAgi7Qfn1tBwORWTL8jhWVBcl7c8FZC4hIoroZAnKLmXEjsDw5SN6ZCrn6pUOmeGOXUa6m42xMTd1ipnRAvZAVb3iIPZBO2rxZC0V25a7PCJtgZAZBWlc4MuX2GId2TQM2YIGurjMrVf0l8vKUi6NAAYZCMjZCFSdeOMy6bRyhLDKwx1DsgocW6ZA9ttwg61ZCcswbGwkZD";
const mytoken = "krunalt";
const WhatsappModel = require("../module/whatsapp.module");

router.get("/whatsapp-webhook", (req, res) => {
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

router.get("/first_req-whatsapp", (req, res) => {
  const axios = require("axios");
  let data = JSON.stringify({
    messaging_product: "whatsapp",
    to: "917709228649",
    type: "template",
    template: {
      name: "temp1",
      language: {
        code: "en_US",
      },
    },
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://graph.facebook.com/v17.0/185315941321665/messages",
    headers: {
      Authorization:
        "Bearer EAAZAa1WwYEL0BO8l9lOKwCspmpifZAgi7Qfn1tBwORWTL8jhWVBcl7c8FZC4hIoroZAnKLmXEjsDw5SN6ZCrn6pUOmeGOXUa6m42xMTd1ipnRAvZAVb3iIPZBO2rxZC0V25a7PCJtgZAZBWlc4MuX2GId2TQM2YIGurjMrVf0l8vKUi6NAAYZCMjZCFSdeOMy6bRyhLDKwx1DsgocW6ZA9ttwg61ZCcswbGwkZD",
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/whatsapp-webhook", async (req, res) => {
  try {
    let body_param = req.body;

    if (body_param.object) {
      if (
        body_param.entry &&
        body_param.entry[0].changes &&
        body_param.entry[0].changes[0].value &&
        body_param.entry[0].changes[0].value.messages &&
        body_param.entry[0].changes[0].value.messages[0]
      ) {
        const name =
          body_param.entry[0].changes[0].value.contacts[0].profile.name;
        let phone_no_id =
          body_param.entry[0].changes[0].value.metadata.phone_number_id;
        let from = body_param.entry[0].changes[0].value.messages[0].from;
        let msg_body =
          body_param.entry[0]?.changes[0]?.value?.messages[0]?.text?.body;
        let paylod_body =
          body_param.entry[0]?.changes[0]?.value?.messages[0]?.button?.payload;

        const existingUser = await WhatsappModel.findOne({ phonenumber: from });

        if (existingUser) {
          if (paylod_body) {
            existingUser.messages.push({
              body: paylod_body,
              timestamp: new Date(),
              action: "recive",
            });
            await existingUser.save();
          } else if (msg_body) {
            existingUser.messages.push({
              body: msg_body,
              timestamp: new Date(),
              action: "recive",
            });
            await existingUser.save();
          }
        } else {
          // User does not exist, create a new user
          const newUser = new WhatsappModel({
            name: name,
            phoneid: phone_no_id,
            phonenumber: from,
            messages: [
              {
                body: msg_body || paylod_body,
                timestamp: new Date(),
                action: "recive",
              },
            ],
          });
          await newUser.save();
        }

        if (
          (msg_body && msg_body.toLowerCase() === "hello") ||
          (paylod_body && paylod_body.toLowerCase() === "hello")
        ) {
          const url =
            "https://graph.facebook.com/v17.0/" + phone_no_id + "/messages";
          const accessToken = token;

          const headers = {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          };

          const data = {
            messaging_type: "whatsapp",
            to: from,
            messaging_product: "whatsapp",
            text: {
              body: "Hi, how can I help you?",
            },
          };

          res.sendStatus(200);

          await axios.post(url, data, { headers });
        } 
        
        else if (msg_body === "INDUSTRY" || paylod_body === "INDUSTRY") {
          const url =
            "https://graph.facebook.com/v17.0/" + phone_no_id + "/messages";
          const accessToken = token;

          const headers = {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          };

          let data = JSON.stringify({
            messaging_product: "whatsapp",
            to: "917709228649",
            type: "template",
            template: {
              name: "industry",
              language: {
                code: "en_US",
              },
            },
          });

          res.sendStatus(200);

          let existingUser = await WhatsappModel.findOne({ phonenumber: from });
            existingUser.messages.push({
            body: "INDUSTRY ALL OPTIONS",
            timestamp: new Date(),  
            action: "send",
          });
          await existingUser.save();

          await axios.post(url, data, { headers });

        } 
        
        else if (
          msg_body === "AI/ML USE CASES" ||
          paylod_body === "AI/ML USE CASES"
        ) {
          const url =
            "https://graph.facebook.com/v17.0/" + phone_no_id + "/messages";
          const accessToken = token;

          const headers = {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          };

          let data = JSON.stringify({
            messaging_product: "whatsapp",
            to: "917709228649",
            type: "template",
            template: {
              name: "aiml_use_cases",
              language: {
                code: "en_US",
              },
            },
          });

          res.sendStatus(200);

          let existingUser = await WhatsappModel.findOne({ phonenumber: from });
          existingUser.messages.push({
          body: "AI/ML ALL OPTIONS",
          timestamp: new Date(),  
          action: "send",
        });
        await existingUser.save();

          await axios.post(url, data, { headers });

        } 


        else if ( msg_body === "CORPORATE & ACADEMIC" || paylod_body === "CORPORATE & ACADEMIC" ) {
          const url =
            "https://graph.facebook.com/v17.0/" + phone_no_id + "/messages";
          const accessToken = token;

          const headers = {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          };

          let data = JSON.stringify({
            messaging_product: "whatsapp",
            to: "917709228649",
            type: "template",
            template: {
              name: "corporate__academic",
              language: {
                code: "en_US",
              },
            },
          });

          res.sendStatus(200);

          let existingUser = await WhatsappModel.findOne({ phonenumber: from });
          existingUser.messages.push({
          body: "CORPORATE & ACADEMIC ALL OPTIONS",
          timestamp: new Date(),  
          action: "send",
        });
        await existingUser.save();

          await axios.post(url, data, { headers });

        } 

        else if ( msg_body === "MVPE" || paylod_body === "MVPE" ) {
          const url =
            "https://graph.facebook.com/v17.0/" + phone_no_id + "/messages";
          const accessToken = token;

          const headers = {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          };

          let data = JSON.stringify({
            messaging_product: "whatsapp",
            to: "917709228649",
            type: "template",
            template: {
              name: "minimal_viable_product_engagement",
              language: {
                code: "en_US",
              },
            },
          });

          res.sendStatus(200);

          let existingUser = await WhatsappModel.findOne({ phonenumber: from });
          existingUser.messages.push({
          body: "MVPE ALL OPTIONS",
          timestamp: new Date(),  
          action: "send",
        });
        await existingUser.save();

          await axios.post(url, data, { headers });

        } 




        else if (
          msg_body === "RETAIL" || paylod_body === "RETAIL" ||
          msg_body === "AEROSPACE" || paylod_body === "AEROSPACE" ||
          msg_body === "DEFENSE" || paylod_body === "DEFENSE" ||
          msg_body === "EDUCATION" || paylod_body === "EDUCATION" ||
          msg_body === "SUPPLY CHAIN" || paylod_body === "SUPPLY CHAIN" ||
          msg_body === "HEALTHCARE" || paylod_body === "HEALTHCARE" ||
          msg_body === "CUSTOMER SEGMENTATION" || paylod_body === "CUSTOMER SEGMENTATION" ||  
          msg_body === "RECOMMENDATION ENGINE" || paylod_body === "RECOMMENDATION ENGINE" ||  
          msg_body === "INTERNET OF THINGS" || paylod_body === "INTERNET OF THINGS" ||  
          msg_body === "INDUSTRIAL INTERNET OF TH" || paylod_body === "INDUSTRIAL INTERNET OF TH" ||  
          msg_body === "DS WITH PY/R/SAS/MATLAB" || paylod_body === "DS WITH PY/R/SAS/MATLAB" ||  
          msg_body === "ML WITH PY/R/SAS/MATLAB" || paylod_body === "ML WITH PY/R/SAS/MATLAB" ||  
          msg_body === "DL WITH PY/R/SAS/MATLAB" || paylod_body === "DL WITH PY/R/SAS/MATLAB" ||  
          msg_body === "DL USING CUDA/INTEL API" || paylod_body === "DL USING CUDA/INTEL API" ||  
          msg_body === "QUANTUM COMPUTING IN ML" || paylod_body === "QUANTUM COMPUTING IN ML" ||  
          msg_body === "FINANCIAL TECHNOLOGY HEAL" || paylod_body === "FINANCIAL TECHNOLOGY HEAL" ||  
          msg_body === "OTHERS" || paylod_body === "OTHERS" 
          ) {
          const url =
            "https://graph.facebook.com/v17.0/" + phone_no_id + "/messages";  
          const accessToken = token;

          const headers = {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          };

          const data = {
            messaging_type: "whatsapp",
            to: from,
            messaging_product: "whatsapp",
            text: {
              body: "Please enter your query",
            },
          };

          res.sendStatus(200);

          await axios.post(url, data, { headers });

          existingUser.messages.push({
            body: "Please enter your query",
            timestamp: new Date(),
            action: "send",
          });
          await existingUser.save();
        } 
      
        else {
          const url =
            "https://graph.facebook.com/v17.0/" + phone_no_id + "/messages";
          const accessToken = token;

          const headers = {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          };

          const data = {
            messaging_type: "whatsapp",
            to: from,
            messaging_product: "whatsapp",
            text: {
              body: "We will get back to you soon.",
            },
          };

          res.sendStatus(200);

          await axios.post(url, data, { headers });

          existingUser.messages.push({
            body: "We will get back to you soon.",
            timestamp: new Date(),
            action: "send",
          });
          await existingUser.save();
        }








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
