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
  res.render('index');
});

// helper function
function validateEmail (req, res, next) {
  if (email.indexOf(req.body.email) === -1) {
    //throw error
    req.flash('danger', 'Invalid email. Please try again.')
    res.redirect('/')
  } else {
    return next();
  }
  // console.log('more boobs', req.body);
}

module.exports = router;
