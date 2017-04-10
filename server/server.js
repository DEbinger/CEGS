const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;
const bodyParser = require('body-parser');

const {HOTEL_CAR_KEY, FLIGHT_KEY} = process.env;

const flightsRoute = require('./routes/flightsRoute.js');
const carRoute = require('./routes/carRoute.js');
const hotelRoute = require('./routes/hotelRoute.js');

app.use(bodyParser.urlencoded( {
  extended : true
}));

app.use('/flights', flightsRoute);
app.use('/hotels', hotelRoute);
app.use('/cars', carRoute);

app.use('/', (req, res) => {
  res.send('hi');
});


app.listen(PORT, () => {
  console.log("Server listening on", PORT);
});