const router = require('express').Router();
const Subscriber = require('../module/webhook.module');

router.post('/webhook', async (req, res) => {
    const { queryResult } = req.body;

    const data = await Subscriber.find({ email: queryResult.queryText });
    console.log(data);
    console.log(queryResult.queryText);
    
    if (data.length === 0) {
        const createdSubscriber = new Subscriber({
            email: queryResult.queryText
    });
    const result = await createdSubscriber.save();
    }

  });

module.exports = router;