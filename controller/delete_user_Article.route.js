const route = require('express').Router();
const User = require('../module/user.module');

route.put("/delete_article", async (req, res) => {

    try {
        const result = await User.updateOne(
            { _id: req.body.id },
            { $pull: { articles: { _id: req.body.article_id } } }
        );

        if (result.nModified > 0) {
            res.send({ message: "Article Deleted" });
        } else {
            res.status(404).send({ message: "Article not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = route;
