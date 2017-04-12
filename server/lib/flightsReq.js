const API_KEY = process.env.FLIGHT_API_KEY;
const https = require('https');


function flightsList() {
  return new Promise( (resolve, reject) => {

    let options = {
      "method": "POST",
      "hostname": "www.googleapis.com",
      "port": null,
      "path": `/qpxExpress/v1/trips/search?key=${API_KEY}`,
      "headers": {
        "content-type": "application/json",
        "cache-control": "no-cache"
      }
    };

    let req = https.request(options, function (res) {

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

    req.write(JSON.stringify( {
      request: {
        passengers: {
          adultCount: '2'
        },
        slice: [ {
          origin: 'JFK',
          destination: 'CWL',
          date: '2017-07-05'
        }],
        solutions: '20'
      }
    }));

    req.end();
  });
}

module.exports = {
  flightsList
};