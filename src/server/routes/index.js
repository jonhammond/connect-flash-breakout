var express = require('express');
var router = express.Router();

var email = [
  'jonh1016@gmail.com',
  'test@test.com'
]

// routes

router.get('/', function(req, res, next) {
  res.render('index', {
    messages: req.flash('danger')
  });
});

router.post('/', validateEmail, function(req, res, next) {
  // console.log('boobs',req.body.email)
  res.render('index', {
    messages: req.flash('danger')
  });
});

// helper function
function validateEmail (req, res, next) {
  if (email.indexOf(req.body.email) === -1) {
    //throw error
    req.flash('danger', req.body.email + ' is an invalid email. Please try again.')
    res.redirect('/')
  } else {
    console.log('Test');
    req.flash('danger', 'Success!')
    return next();
  }
  // console.log('more boobs', req.body);
}

module.exports = router;
