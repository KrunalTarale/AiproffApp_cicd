const route = require('express').Router();
const WhatsappModel = require('../module/whatsapp.module');

route.get('/get-whatsappuserbyid/:id', async(req, res) => {
    const id = req.params.id;
    try {
        const data = await WhatsappModel.find({ phonenumber : id});    
        console.log(data);
        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send(`Internal Server Error: ${err.message}`);
    }
})

module.exports = route;