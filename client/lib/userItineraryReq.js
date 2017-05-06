module.exports = function itineraryReq(userId, cb) {
  let reqValues = `id=${userId}`;
  let oReq = new XMLHttpRequest();
  oReq.addEventListener('load', (results) => {
    console.log('ITINERARY REQ RESULTS:', results);
    cb(results);
  });
  oReq.open('POST', '/itinerary/userItineraries');
  oReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  console.log(reqValues);
  oReq.send(reqValues);
};

