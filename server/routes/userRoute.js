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

  router.get('/login', function(req, res){
    res.send('Login Test');
  });

  router.post('/login', function(req, res){
    console.log('req.body');
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        User.create({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: hash
        })
        .then((users) =>{
          res.json(users);
        })
        .catch(err => {
          console.log("USER ALREADY EXISTS", err);
          //redirect to making user again and/or flash the error message
        });
      });
    });

  router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }));

  router.get('/signup', function(req, res){
    res.render('', { message: req.flash('signupMessage') });//signup button render
  });

  router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  }));

  router.get('/profile', isLoggedIn, function(req, res){
    res.render('', { user: req.user });//profile render
  });

  router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

  router.get('/auth/facebook/callback',
    passport.authenticate('facebook',
      {successRedirect: '/profile',
      failureRedirect: '/'
      }));

  router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

  router.get('/auth/google/callback',
    passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/'
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

  res.redirect('/login');
}

module.exports = router;