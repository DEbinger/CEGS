const API_KEY = process.env.CAR_API_KEY;
const https = require('https');

module.exports = function carsReq(location, pick_up, drop_off) {
  return new Promise( (resolve, reject) => {

    https.get(`https://api.sandbox.amadeus.com/v1.2/cars/search-airport?apikey=${API_KEY}&location=${location}&pick_up=${pick_up}&drop_off=${drop_off}&currency=USD`, (res) => {

      let myData = '';

      res.on('data', (chunk) => {
        myData += chunk;
      });

      res.on('end', () => {
        resolve(JSON.parse(myData));
      })
      .on('error', (e) => {
        console.log(`Got error: ${e}`);
        reject(e);
      });
    });
  });
};