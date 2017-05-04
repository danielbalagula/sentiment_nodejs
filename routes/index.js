var express = require('express');
var sentiment = require('../sentimentz');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sentiment', function(req, res, next){
  res.json({result: (sentiment(req.body.phrase).score >= 0 ? "Positive" : "Negative")})
});

router.post('/sentiment_batch', function(req, res, next){
  var results = [];
  req.body.forEach(function(phrase){
    console.log(phrase);
    results.push({result:(sentiment(phrase).score >= 0 ? "Positive" : "Negative")});
  });
  res.json(results);
});

module.exports = router;
