const router = require("express").Router();
const axios = require("axios");

require("dotenv").config()

// Matches with "/api/nyt"
router
  .route("/")
  .get(function (req, res) {
    console.log(req.query);
    
    axios
      .get(`https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=${process.env.newsAPI}`, {params: req.query})
      .then(function (articleData) {
        res.json(articleData.data)
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
      });

  })

module.exports = router;