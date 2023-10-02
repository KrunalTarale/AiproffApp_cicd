const route = require('express').Router();
const User = require('../module/user.module');

route.get('/get_user_article/:id', async (req, res) => {
    const id = req.params.id;
    const data = await User.find({ _id: id });
    res.send (data);
})

module.exports = route