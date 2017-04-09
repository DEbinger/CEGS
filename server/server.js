const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;
const bodyParser = require('body-parser');

const {HOTEL_CAR_KEY, FLIGHT_KEY} = process.env;

app.use(bodyParser.urlencoded( {
  extended : true
}));

app.use('/', (req, res) => {
  res.send('testing');
});

app.listen(PORT, () => {
  console.log("Server listening on", PORT);
});