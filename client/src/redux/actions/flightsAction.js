export const LIST_FLIGHTS = 'LIST_FLIGHTS';
export const ADD_FLIGHT = 'ADD_FLIGHT';
export const SEARCH_FLIGHTS = 'SEARCH_FLIGHTS';

export function addFlight(origin, destination, date, adultCount, infantInLapCount, infantInSeatCount, childCount, seniorCount, refundable, user) {
  return {
    type: ADD_FLIGHT,
    origin,
    destination,
    date,
    adultCount,
    infantInLapCount,
    infantInSeatCount,
    childCount,
    seniorCount,
    refundable,
    user
  };
}

export function listFlight(saleTotal, flights) {
  return {
    type: LIST_FLIGHTS,
    saleTotal,
    flights
  };
}

export function searchFlights(origin, destination, adultCount, date) {
  return {
    type: SEARCH_FLIGHTS,
    origin,
    destination,
    adultCount,
    date
  };
}