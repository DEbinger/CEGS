const API_KEY = process.env.CAR_API_KEY;
const https = require('https');

module.exports = function carsReq() {
  return new Promise( (resolve, reject) => {

    https.get(`https://api.sandbox.amadeus.com/v1.2/cars/search-airport?apikey=${API_KEY}&location=HNL&pick_up=2017-08-07&drop_off=2017-08-08&currency=USD`, (res) => {

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
