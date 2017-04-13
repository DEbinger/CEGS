// jshint esversion:6

const express = require('express');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const passport = require('passport');
const flash = require('connect-flash');
const LocalStrategy = require('passport-local').Strategy;

require('../auth/passport')(passport);

app.use(cookieParser());

const {HOTEL_CAR_KEY, FLIGHT_KEY} = process.env;
const flightsRoute = require('./routes/flightsRoute.js');
const carRoute = require('./routes/carRoute.js');
const hotelRoute = require('./routes/hotelRoute.js');

app.use(bodyParser.urlencoded( {
  extended : true
}));

app.use(session({
  secret: 'anystringoftext',
  saveUninitialized: true,
  resave: true
  }));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use('/flights', flightsRoute);
app.use('/hotels', hotelRoute);
app.use('/cars', carRoute);

app.use('/', (req, res) => {
  res.send('BAD ROUTE');
});

require('../routes/routes.js');

app.listen(PORT, () => {
  console.log("Server listening on", PORT);
});