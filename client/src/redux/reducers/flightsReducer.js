import {
  LIST_FLIGHTS,
  SEARCH_FLIGHTS,
  CLEAR_FLIGHTS,
  ERROR_MESSAGE,
  CARRIER_CODE
} from '../actions/flightsAction';

const initialState = {
  flights: [],
  searchValues: {},
  errorMsg: '',
  carrierCodes: {}
};

function flights(state = initialState, action) {
  switch(action.type) {
    case LIST_FLIGHTS:
      return Object.assign({}, state, {
        flights: [
          ...state.flights,
          {
            id: action.id,
            saleTotal: action.saleTotal,
            slice: action.slice,
            pricing: action.pricing
          }
        ]
      });

    case SEARCH_FLIGHTS:
      return Object.assign({}, state, {
        searchValues: {
          origin: action.origin,
          destination: action.destination,
          adultCount: action.adultCount,
          tripType: action.tripType,
          departureDate: action.departureDate,
          returnDepartureDate: action.returnDepartureDate
        }
      });

    case CLEAR_FLIGHTS:
      return Object.assign({}, state, {
        flights: [],
        errorMsg: ''
      });

    case ERROR_MESSAGE:
      return Object.assign({}, state, {
        errorMsg: action.errorMessage
      });

    case CARRIER_CODE:
      return Object.assign({}, state, {
        [action.code]: action.name
        });

      default:
        return state;
  }
}

export default flights;

// flight:
// -nav bar at top changes (profile, logout)
// -tabs/buttons below nav (one way, roundtrip, multitrip)
// -enter departure/arrival info (location, date, time)
// -enter number of people
// -search button -> flight options page

// Flight Options:
// -filter/sort based on price, airlines, stops (default cheapest)
// -select flight button -> overpage page