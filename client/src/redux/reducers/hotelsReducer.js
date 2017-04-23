import { LIST_HOTELS } from '../actions/hotelsAction';

const initialState = {
  hotels: ['TEST HOTEL YO']
};

function hotels(state = initialState, action) {
  switch(action.type) {
    case LIST_HOTELS:
      return Object.assign({}, state, {
        hotels: [
          ...state.hotels,
          {
            location: action.location,
            check_in: action.check_in,
            check_out: action.check_out,
            amenity: action.amenity,
            itinerary: action.itinerary,
            user: action.user
          }
        ]
      });

      default:
        return state;
  }
}

export default hotels;