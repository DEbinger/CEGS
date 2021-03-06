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


router.post('/list', (req, res) => {
  const {
    origin,
    destination,
    adultCount,
    childCount,
    infantInLapCount,
    infantInSeatCount,
    seniorCount,
    tripType,
    departureDate,
    returnDepartureDate,
    refundable
  } = req.body;

  request.flightsList(origin, destination, adultCount, childCount, infantInLapCount, infantInSeatCount, seniorCount, tripType, departureDate, returnDepartureDate, refundable)
  .then(results => {
    res.send(results);
  });
});

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