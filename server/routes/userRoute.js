// jshint esversion:6

const express = require('express');
const app = express();
const router = express.Router();
const passport = require('passport');
const db = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = db.User;

router.get('/', function(req, res){
  res.send('In the User Route');
});

router.get('/signup', function(req, res){
  res.send('Sign Up Route');
});

router.route('/signin')
  .get(function(req,res){
    res.send('Sign In Route');
  })
  .post(passport.authenticate('local'),function(req,res){
    res.redirect('/profile');
  });

router.route('/profile')
  .get(function(req, res) {
  res.send('profile test route');
});

router.post('/signup', function(req, res){
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hash,
        security_question: req.body.security_question,
        security_answer: req.body.security_answer
      })
      .then((users) =>{
        res.send(users);
      })
      .catch(err => {
        console.log("USER ALREADY EXISTS", err);
      });
  });
});


router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook',{
    successRedirect: '/profile',
    failureRedirect: '/signin'
    }));

router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

router.get('/auth/google/callback',
  passport.authenticate('google', {
  successRedirect: '/profile',
  failureRedirect: '/signin'
  }));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
  });
});

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()){
    return next();
  }

  res.redirect('/signin');
}

module.exports = router;