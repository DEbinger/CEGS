const express = require('express');
const router = express.Router();
const db = require('../models');
const {
  Itinerary,
  Hotel,
  Flight,
  User,
  Car
} = db;

router.post('/saveItinerary', (req, res) => {
  console.log(req.body);
  let hotelId, carId, flightId;

  let {
    hotelInfo,
    carInfo,
    flightInfo,
    userInfo
  } = req.body;

  Hotel.create({
    airport: hotelInfo.airport,
    check_in: hotelInfo.check_in,
    check_out: hotelInfo.check_out,
    saleTotal: hotelInfo.saleTotal,
    hotelName: hotelInfo.hotelName,
    user: userInfo.id
  }).then(result => {
    hotelId = result.dataValues.id;

    Car.create({
      airport: carInfo.airport,
      pick_up: carInfo.pick_up,
      drop_off: carInfo.drop_off,
      vehicle_type: carInfo.vehicle_type,
      amount: carInfo.amount,
      company_name: carInfo.company_name,
      user: userInfo.id
    }).then(result => {
      carId = result.dataValues.id;

      Flight.create({
        origin: flightInfo.origin,
        destination: flightInfo.destination,
        departureDate: flightInfo.departureDate,
        returnDate: flightInfo.returnDepartureDate,
        saleTotal: flightInfo.saleTotal
      }).then(result => {
        flightId = result.dataValues.id;

        Itinerary.create({
          user: userInfo.id,
          hotel: hotelId,
          car: carId,
          flight: flightId
        }).then(result => {
          console.log('CREATED ITINERARY:', result.dataValues);
          res.send(result.dataValues);
        });
      });
    });
  });
});



module.exports = router;