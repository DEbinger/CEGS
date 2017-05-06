const db = require('../models');
const { Flight } = db;

module.exports = function itineraryList(list) {
  return new Promise ((resolve, reject) => {

    let itineraryObj = {};

    let all = list.map( data => {

      let itinerary = data.dataValues;

      return Flight.findOne({
        where: {
          id: itinerary.flight
        }
      })
      .then(result => {
        let flightData = result.dataValues;

        Object.assign(itineraryObj, {
          [`itinerary${itinerary.id}`]: {
            origin: flightData.origin,
            destination: flightData.destination,
            createdAt: flightData.createdAt
          }
        });

      // console.log('SDFJKSL:DFKJ', itineraryObj);
      });
    });

    Promise.all(all)
    .then(_ => resolve(itineraryObj))

    ;
  });
};