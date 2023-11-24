const router = require("express").Router();
const Webhook = require("../module/webhook.module");

router.post("/webhook", async (req, res) => {
  const intent = req.body.queryResult.intent.displayName;

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

    if (user_details.person.name && user_details.any) {
      const createdSubscriber = new Webhook({
        name: user_details.person.name,
        email: null,
        phone: user_details.number,
        query: user_details.any,
      });
      const result = await createdSubscriber.save();

      if (result) {
        const response = {
          fulfillmentText:
            "In the meantime we are available at: +91 8076774495",
        };
        res.json(response);
      } 
      else {
        const response = {
          fulfillmentText: "Please refill the details and try again",
        };
        res.json(response);
      }
    }

    else{
      const response = {
        fulfillmentText: "Please enter your query in 250 words",
      };
      res.json(response);
    }

  }

});

module.exports = router;
