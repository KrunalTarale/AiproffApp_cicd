const mongoose = require('mongoose');

const webhookSchema = new mongoose.Schema(
    {
        email : String
    }
)

const Webhook = mongoose.model('Webhook', webhookSchema)

module.exports = Webhook;

