import {
  LIST_FLIGHTS,
  SEARCH_FLIGHTS
} from '../actions/flightsAction';

const initialState = {
  flightsList: ['TEST FLIGHT YO'],
  searchValues: {
    origin: '',
    destination: '',
    adultCount: '',
    date: ''
  }
};

function flights(state = initialState, action) {
  switch(action.type) {
    case LIST_FLIGHTS:
      return Object.assign({}, state, {
        flightsList: [
          {
            saleTotal: action.saleTotal,
            flights: action.flights
          }
        ]
      });

      case SEARCH_FLIGHTS:
        return Object.assign({}, state, {
          searchValues: {
            origin: action.origin,
            destination: action.destination,
            adultCount: action.adultCount,
            date: action.date
          }
        });

      default:
        return state;
  }
}

export default flights;