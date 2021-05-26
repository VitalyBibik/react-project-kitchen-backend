var router = require('express').Router();
var mongoose = require('mongoose');
var Article = mongoose.model('Article');
var User = mongoose.model('User');

// return a list of tags
router.get('/', function(req, res, next) {
  Article.find().distinct('tagList').then(function(tags){
    return res.json({tags: tags});
  }).catch(next);
});

router.get('/people', function(req, res, next) {
  User.find().then(function(people){
    return res.json({people: people});
  }).catch(next);
});

module.exports = router;
