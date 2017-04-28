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
router.get('/home', (req, res) => {
  res.send('CAR HOME');
});

// POST /car/list/:apikey/:location/:pick_up/:drop_off
router.post('/list', (req, res) => {
  const {
    location,
    pick_up,
    drop_off
    } = req.body;
  carsReq(location, pick_up, drop_off)
    .then(results => {
      res.send(results);
    });
});

// GET /car/detail/:apikey/:location/:pick_up/:drop_off
router.post('/details', (req, res) => {
  const {
    company_name,
    airport,
    city,
    amount,
    type,
    category,
    transmission,
    fuel
  } = req.body;
  carsReq(company_name, airport, city, amount, type, category, transmission, fuel)
    .then(results => {
      res.send(results);
    });
});

// POST /car/addcar <= adds to database
router.post('/addcar', (req, res) => {
  Cars.create({
    location: req.body.location,
    pick_up: req.body.pick_up,
    drop_off: req.body.drop_off,
    vehicle: req.body.vehicle
  })
    .then((itinerary) => {
      res.redirect('/itinerary');
    });
});

// DELETE /car/:id <= removes car from database
router.get('/:id', (req, res) => {
  Cars.findById(req.params.id)
    .then((cars) => {
      res.redirect('/cars');
    });
});

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