export const LIST_FLIGHTS = 'LIST_FLIGHTS';
export const SEARCH_FLIGHTS = 'SEARCH_FLIGHTS';

export function listFlights(id, saleTotal, slice) {
  return {
    type: LIST_FLIGHTS,
    id,
    saleTotal,
    slice
  };
}

export function searchFlights(origin, destination, adultCount, tripType, departureDate, returnDepartureDate) {
  return {
    type: SEARCH_FLIGHTS,
    origin,
    destination,
    adultCount,
    tripType,
    departureDate,
    returnDepartureDate
  };
}

// flight:
// -nav bar at top changes (profile, logout)
// -tabs/buttons below nav (one way, roundtrip, multitrip)
// -enter departure/arrival info (location, date, time)
// -enter number of people
// -search button -> flight options page

// Flight Options:
// -filter/sort based on price, airlines, stops (default cheapest)
// -select flight button -> overpage page