const router = require("express").Router();
const Webhook = require("../module/webhook.module");

router.post("/webhook", async (req, res) => {
  const intent = req.body.queryResult.intent.displayName;
  // console.log(req.body.queryResult.outputContexts[1].parameters);

  if (intent === "ThirdLevel") {
    const response = {
      fulfillmentText: "Please enter your query in 250 words",
    };
    res.json(response);
  }
  if (intent === "ThirdLevel - custom") {
    const response = {
      fulfillmentText: "Please enter your name",
    };
    res.json(response);
  }

  if (intent === "ThirdLevel - custom - custom") {
    const response = {
      fulfillmentText:
        "Please enter your contact number preceded by International Calling Code or you may reach out to us at : +918076774495",
    };
    res.json(response);
  }

  if (intent === "ThirdLevel - custom - custom - custom") {

    const user_details = req.body.queryResult.outputContexts[1].parameters;
    console.log(user_details);


    if (user_details.number && !user_details.email) {
      if (isValidPhoneNumber("+"+req.body.queryResult.outputContexts[1].parameters.number)) {
        const user_info = req.body.queryResult.outputContexts[1].parameters;

        if (user_info.name || user_info.any) {

          const createdSubscriber = new Webhook({
            name: user_info.person.name,
            email: null,
            phone: user_info.number,
            query: user_info.any,
          });
          const result = await createdSubscriber.save();

          if (result) {
            const response = {
              fulfillmentText:
                "In the meantime we are available at: +91 8076774495",
            };
            res.json(response);
          }

        }
         else {
          const response = {
            fulfillmentText: "Please refill the details and try again",
          };
          res.json(response);
        }
      } 
      
      else {
        const response = {
          fulfillmentText:
            "Please enter a valid phone number with the country code, like this: +91 1122334455. Thank you",
        };
        res.json(response);
      }
    }

  

  }


});

function isValidEmail(email) {
  // Regular expression for basic email format validation
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
  // Regular expression for phone number format validation
  const phoneRegex = /^\+\d{2}(?: \d{10})?/;
  return phoneRegex.test(phone);
}

module.exports = router;



