import {
  LIST_FLIGHTS,
  SEARCH_FLIGHTS,
  CLEAR_FLIGHTS,
  ERROR_MESSAGE,
  CARRIER_CODE,
  FLIGHT_DETAILS,
  FLIGHT_ITINERARY
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
          childCount: action.childCount,
          infantInLapCount: action.infantInLapCount,
          infantInSeatCount: action.infantInSeatCount,
          seniorCount: action.seniorCount,
          tripType: action.tripType,
          departureDate: action.departureDate,
          returnDepartureDate: action.returnDepartureDate,
          refundable: action.refundable
        }
      });

    case FLIGHT_DETAILS:
      return Object.assign({}, state, {
        flightDetail: {
          pricing: action.pricing,
          saleTotal: action.saleTotal,
          slice: action.slice
        }
      });

    case CLEAR_FLIGHTS:
    console.log('cleared flights');
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
        carrierCodes: action.names
      });

    case FLIGHT_ITINERARY:
      return Object.assign({}, state, {
        flightItinerary: {
          saleTotal: action.saleTotal,
          departureDate: action.departureDate,
          returnDepartureDate: action.returnDepartureDate,
          origin: action.origin,
          destination: action.destination
        }
      });

      default:
        return state;
  }
}

export default flights;