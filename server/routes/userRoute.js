// jshint esversion:6

const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = function(app, passport){
  app.get('/', function(req, res){
    res.render('');//index render
  });

  app.get('/login', function(req, res){
    res.render('', { message: req.flash('loginMessage') });//login button render
  });
  app.post('/login', function(req, res){
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.body.Password, salt, function(err, hash) {
        Users.create({
          firstName: req.body.FirstName,
          lastName: req.body.LastName,
          email: req.body.Email,
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
  });

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }));

  app.get('/signup', function(req, res){
    res.render('', { message: req.flash('signupMessage') });//signup button render
  });


  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  }));

  app.get('/profile', isLoggedIn, function(req, res){
    res.render('', { user: req.user });//profile render
  });

  app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook',
      {successRedirect: '/profile',
      failureRedirect: '/'
      }));

  app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

  app.get('/auth/google/callback',
    passport.authenticate('google', {
    successRedirect: '/profile',
    failureRedirect: '/'
    }));



  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
};

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()){
    return next();
  }

  res.redirect('/login');
}