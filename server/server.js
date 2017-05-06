// jshint esversion:6

const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const app = express();
const PORT = process.env.PORT || 9000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require('./models');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = db.User;
const router = express.Router();

// require('../auth/passport')(passport);

app.use(cookieParser());

const {HOTEL_API_KEY, CAR_API_KEY, FLIGHT_API_KEY} = process.env;
const flightsRoute = require('./routes/flightsRoute.js');
const carRoute = require('./routes/carRoute.js');
const hotelRoute = require('./routes/hotelRoute.js');
const userRoute = require('./routes/userRoute.js');

app.use(bodyParser.urlencoded( {
  extended : true
}));

app.use(bodyParser.json({type: 'application/json'}));

app.use(session({
  secret: 'anystringoftext',
  saveUninitialized: true,
  resave: true
  }));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// app.use(flash()); // use connect-flash for flash messages stored in session

passport.use(new LocalStrategy(
  function (username, password, done) {
    console.log(username, password);
    User.findOne({
      where: {
        email:username
      }
    }).then ( email => {
      if (email === null) {
        console.log('This email does not match a user in database');
        return done(null, false, {message: 'bad email'});

      }else {

        bcrypt.compare(password, email.password)
        .then(res => {
            console.log(res);
          console.log('Signin with Email and Password',password, email.password);
          if (res) {
            return done(null, email);
          }else {
            return done(null, false);
          }
        });

      }
    }).catch(err => {
      res.send(err);
    });
  })
);

passport.serializeUser(function(user, done) {
  return done(null, {
    id:user.id,
    email:user.email
  });
});

passport.deserializeUser(function(user, done) {
  User.findOne({
    where: {
      id: user.id
    }
  })
  .then(user => {
    return done(null, user);
  });
});

app.use('api/flights', flightsRoute);
app.use('api/hotels', hotelRoute);
app.use('api/cars', carRoute);
app.use('api/users', userRoute);

app.use('/', (req, res) => {
  res.send('BAD ROUTE');
});

app.listen(PORT, () => {
  console.log("Server listening on", PORT);
  db.sequelize.sync();
});