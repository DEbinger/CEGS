const API_KEY = process.env.HOTEL_API_KEY;
const https = require('https');

function hotelsList(location, check_in, check_out) {
  return new Promise( (resolve, reject) => {
    https.get(`https://api.sandbox.amadeus.com/v1.2/hotels/search-airport?apikey=${API_KEY}&location=${location}&check_in=${check_in}&check_out=${check_out}&radius=40`, (res) => {

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
}

function hotelsDetail(propertyCode) {
  return new Promise( (resolve, reject) => {
    https.get(`https://api.sandbox.amadeus.com/v1.2/hotels/${propertyCode}?apikey=${API_KEY}&check_in=2017-08-14&check_out=2017-08-15`, (res) => {

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
}

module.exports = {
  hotelsList,
  hotelsDetail
};