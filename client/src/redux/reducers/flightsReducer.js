import { LIST_FLIGHTS } from '../actions/flightsAction';

const initialState = {
  flights: ['TEST FLIGHT YO']
};

function flights(state = initialState, action) {
  switch(action.type) {
    case LIST_FLIGHTS:
      return Object.assign({}, state, {
        flights: [
          ...state.flights,
          {
            origin: action.origin,
            destination: action.destination,
            date: action.date,
            adultCount: action.adultCount,
            infantInLapCount: action.infantInLapCount,
            infantInSeatCount: action.infantInSeatCount,
            childCount: action.childCount,
            seniorCount: action.seniorCount,
            refundable: action.refundable,
            user: action.user
          }
        ]
      });

      default:
        return state;
  }
}

export default flights;