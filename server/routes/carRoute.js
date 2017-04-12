// DEPENDENCIES
const express = require('express');
const app = express();
const router = express.Router();

// LIB
const carsReq = require('../lib/carsReq.js');

router.get('/', (req, res) => {
  res.send('IN CAR ROUTE');
});

// GET /car/home


// GET /car/list/:apikey/:location/:pick_up/:drop_off
router.get('/list', (req, res) => {
  carsReq()
  .then(results => {
    res.send(results);
  });
});



// GET /car/detail/:apikey/:location/:pick_up/:drop_off


// POST /car/addcar <= adds to database


// DELETE /car/:id <= removes car from database



module.exports = router;


// Car:
// -enter general info (location, dates)
// -select type of car
// -select number of passengers
// -search button -> list of cars page

// List of Cars:
// -filter by type of car, price, passengers (default cheapest)
// -sort by type of car, price, passengers
// -list of cars (with picture, dealer, type of car, passengers, price)
// -can click car to see additional details -> car detail page
// -select car button -> overview page

// Car Detail:
// -dealer, type of car, price
// -picture (only one)
// -address, website, phone number
// -ammenities (automatic, etc.)
// -side bar has add to plan button -> overview page