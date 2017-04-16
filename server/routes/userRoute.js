const express = require('express');
const app = express();
const router = express.Router();
const passport = require('passport');

  router.get('/', function(req, res){
    res.send('hello world');
  });

  router.get('/login', function(req, res){
    res.render('', { message: req.flash('loginMessage') });//login button render
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

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()){
    return next();
  }

  res.redirect('/login');
}

module.exports = router;