// DEPENDENCIES
const express = require('express');
const app = express();
const router = express.Router();

// LIB
const request = require('../lib/flightsReq.js');
const readArchive = require('../lib/readArchive');

router.get('/', (req, res) => {
  res.send('flights route');
});

// GET /flights/home


//POST /flights/list/:origin/:destination/:date
router.get('/list', (req, res) => {
  request.flightsList()
  .then(results => {
    console.log("IN ROUTE");
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    console.log(results);
    res.send(results);
  });
});


//POST /flights/detail/:origin/:destination/:date/:adultCount/:infantInLapCount/:infantInSeatCount/:childCount/:seniorCount/:refundable

//CANT SEARCH FOR A SPECIFIC FLIGHT FROM LIST IN API, MUST BE DONE ON CLIENT SIDE


//POST /flights/details/:price <= posts to database

//PUT /flights/:price/:id <= changes in database

//DELETE /flights/:id <= deletes from database


// ROUTE FOR ARCHIVE DATA
// router.get('/allinfo/:type/:value1/:value2', (req, res) => {
//   readArchive(req.params.type, req.params.value1, req.params.value2, (results) => {
//     res.send(results);
//   });
// });


module.exports = router;


// Flight:
// -nav bar at top changes (profile, logout)
// -tabs/buttons below nav (one way, roundtrip, multitrip)
// -enter departure/arrival info (location, date, time)
// -enter number of people
// -search button -> flight options page

// Flight Options:
// -filter/sort based on price, airlines, stops (default cheapest)
// -select flight button -> overpage page