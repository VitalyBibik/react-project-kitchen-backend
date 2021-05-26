var router = require('express').Router();
var mongoose = require('mongoose');
var Article = mongoose.model('Article');
var User = mongoose.model('User');

// return a list of people
router.get('/', function(req, res, next) {
  User.find().then(function(people){
    return res.json({people: people});
  }).catch(next);
});

module.exports = router;
