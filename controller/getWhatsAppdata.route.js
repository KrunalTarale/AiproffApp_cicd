const router = require("express").Router();
const WhatsappModel = require("../module/whatsapp.module");

router.get("/get-whatsapp-data", async (req, res) => {
    
    const data = await WhatsappModel.find();    
    res.status(200).json(data);

})

module.exports = router;