const mongoose = require('mongoose');

const whatsappSchema = new mongoose.Schema(
    {
        name : String,
        phoneid : String,
        phonenumber : String,
        messages : []
    }
)

const Whatsapp = mongoose.model('Whatsapp', whatsappSchema)

module.exports = Whatsapp;

