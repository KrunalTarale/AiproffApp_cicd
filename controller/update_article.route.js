const route = require('express').Router();
const User = require('../module/user.module');

route.put("/update_article", async (req, res) => {
  const { id, article } = req.body;
  const updatedObject = { ...req.body };
  delete updatedObject.id;
  // console.log(updatedObject);

  try {
    // First, find the user by their _id
    const user = await User.findById(id);
    
    if (!user) {
      return res.status(200).json({ message: "User not found" });
    }

    // Check if an article with the same name already exists
    const existingArticle = user.articles.find(existingArticle => existingArticle.name == article.name);
    console.log(existingArticle);

    // If an article with the same name already exists, return an error
    if (existingArticle) {
      return res.status(200).json({ message: "Article already exists" });
    } 
    
    else {
      user.articles.push(updatedObject);
      const updatedUser = await user.save();
      res.status(200).json({ message: "Article Saved successfully" });
    }
  } 
  
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = route;
