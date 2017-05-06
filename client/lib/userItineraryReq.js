module.exports = function itineraryReq(userId, cb) {
  var reqValues = 'id=' + userId;
  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', function (results) {
    cb(results);
  });
  oReq.open('POST', '/api/itinerary/userItineraries');
  oReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  console.log(reqValues);
  oReq.send(reqValues);
};

