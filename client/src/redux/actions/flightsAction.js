export const LIST_FLIGHTS = 'LIST_FLIGHTS';
export const SEARCH_FLIGHTS = 'SEARCH_FLIGHTS';
export const CLEAR_FLIGHTS = 'CLEAR_FLIGHTS';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';
export const CARRIER_CODE = 'CARRIER_CODE';
export const FLIGHT_DETAILS = 'FLIGHT_DETAILS';

export function listFlights(id, saleTotal, slice, pricing) {
  return {
    type: LIST_FLIGHTS,
    id,
    saleTotal,
    slice,
    pricing
  };
}

export function searchFlights(origin, destination, adultCount, childCount, infantInLapCount, infantInSeatCount, seniorCount,tripType, departureDate, returnDepartureDate, refundable) {
  return {
    type: SEARCH_FLIGHTS,
    origin,
    destination,
    adultCount,
    childCount,
    infantInLapCount,
    infantInSeatCount,
    seniorCount,
    tripType,
    departureDate,
    returnDepartureDate,
    refundable
  };
}

export function clearFlights() {
  return {
    type: CLEAR_FLIGHTS
  };
}

export function errorMsg(errorMessage) {
  return {
    type: ERROR_MESSAGE,
    errorMessage
  };
}

export function carrierCodes(names) {
  return {
    type: CARRIER_CODE,
    names
  };
}

export function flightDetails(pricing, saleTotal, slice) {
  return {
    type: FLIGHT_DETAILS,
    pricing,
    saleTotal,
    slice
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