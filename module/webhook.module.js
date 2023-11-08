const mongoose = require('mongoose');

const webhookSchema = new mongoose.Schema(
    {
        name : String, 
        email : String,
        phone : Array,
        query : String
    }
)

const Webhook = mongoose.model('Webhook', webhookSchema)

module.exports = Webhook;

