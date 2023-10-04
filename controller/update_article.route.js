const route = require('express').Router();
const User = require('../module/user.module');

route.put("/update_article", async (req, res) => {

  const new_article = {
    article : req.body.article,
    title : req.body.title,
    date : req.body.date,
    url : req.body.url
  }

  const user = await User.find({_id : req.body.id});

  if(user.length === 0){
    res.status(200).json({ message: "Please Log in " });
  }

  else{

  const articleExist = await User.exists({ _id: req.body.id, "articles.url": req.body.url });

  if(articleExist){
    res.status(200).json({ message: "Article already exists" });
  }

  else{
    user[0].articles.push(new_article);
    const updatedUser = await user[0].save();
    if (updatedUser) {
      res.status(200).json({ message: "Article Saved successfully" });
    }
  }
  
}

  // user[0].articles.push(new_article);
  // const updatedUser = await user[0].save();
  // if (updatedUser) {
  //   res.status(200).json({ message: "Article Saved successfully" });
  // }

  // const { id, article } = req.body;
  // const updatedObject = { ...req.body };
  // delete updatedObject.id;
  // console.log(updatedObject);

  // try {
  //   // First, find the user by their _id
  //   const user = await User.findById(id);
    
  //   if (!user) {
  //     return res.status(200).json({ message: "Please Log in " });
  //   }

  //   // Check if an article with the same name already exists
  //   const existingArticle = user.articles.find(existingArticle => existingArticle.name == article.name);

  //   // If an article with the same name already exists, return an error
  //   if (existingArticle) {
  //     return res.status(200).json({ message: "Article already exists" });
  //   } 
    
  //   else {
  //     user.articles.push(updatedObject);
  //     const updatedUser = await user.save();
  //     res.status(200).json({ message: "Article Saved successfully" });
  //   }
  // } 
  
  // catch (error) {
  //   console.error(error);
  //   res.status(500).json({ message: "Internal Server Error" });
  // }
});

module.exports = route;
