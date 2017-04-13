// DEPENDENCIES
const express = require('express');
const app = express();
const router = express.Router();

const request = require('../lib/hotelsReq.js');

router.get('/', (req, res) => {
  res.send('IN HOTEL ROUTE');
});

// GET /hotel/home


// GET /hotel/list/:apikey/:location/:check_in/:check_out
router.get('/list', (req, res) => {
  request.hotelsList()
  .then(results => {
    res.send(results);
  });
});


// GET /hotel/detail <= info page for single hotel
router.get('/detail', (req, res) => {
  request.hotelsDetail("LQBOSCZB") /*<= PROPERTY CODE OF HOTEL AS ARGUMENT*/
  .then(results => {
    res.send(results);
  });
});


// POST /hotel/addhotel <= adds hotel to database


// DELETE /hotel/:id <= deletes hotel from database



module.exports = router;


// Hotel:
// -location search bar
// -check in/check out dates
// -number of rooms/guests
// -search button -> list of hotels page

// List of Hotels:
// -filter by cost, rating
// -sort by cost, rating
// -list of hotels (with picture, name, rating, ammenities, cost)
// -can click hotel to see additional details -> hotel detail page
// -select hotel button -> overview page

// Hotel Detail:
// -name, rating, cost
// -picture (can click through gallery)
// -address, website, phone number
// -description (with distance to nearest landmarks/attrations)
// -ammenities (wifi, etc.)
// -side bar has add to plan button -> overview page