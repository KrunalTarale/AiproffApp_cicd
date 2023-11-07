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
        "Please enter your Email address / Phone No. for our team to reach out",
    };
    res.json(response);
  }

  if (intent === "ThirdLevel - custom - custom - custom") {



    console.log(req.body.queryResult.outputContexts[1].parameters);

    if (req.body.queryResult.outputContexts[1].parameters.email) {
      if (
        isValidEmail(req.body.queryResult.outputContexts[1].parameters.email)
      ) {
        const user_info = req.body.queryResult.outputContexts[1].parameters;

        if (user_info.name || user_info.any) {

          const createdSubscriber = new Webhook({
            name: user_info.person.name,
            email: user_info.email,
            phone: null,
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
    } else {
      const response = {
        fulfillmentText:
          "Invalid email address. Please provide a valid email address.",
      };
      res.json(response);
    }


    // if (req.body.queryResult.outputContexts[1].parameters.number) {
    //   if (isValidPhoneNumber(req.body.queryResult.outputContexts[1].parameters.number)) {
    //     const response = {
    //       fulfillmentText: "Phone number is valid. Thank you!",
    //     };
    //     res.json(response);
    //   } else {
    //     const response = {
    //       fulfillmentText:
    //         "Invalid phone number. Please provide a valid phone number with the country code.",
    //     };
    //     res.json(response);
    //   }
    // }
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
  console.log(phoneRegex.test(phone));
  return phoneRegex.test(phone);
}

module.exports = router;



