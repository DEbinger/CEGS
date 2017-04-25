import {
  LIST_HOTELS,
  ADD_HOTEL,
  HOTEL_DETAIL,
  CLEAR_HOTELS
  } from '../actions/hotelsAction';

const initialState = {
  hotels: [],
  hotelDetail: {}
};

function hotels(state = initialState, action) {
  switch(action.type) {
    case ADD_HOTEL:
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

    case LIST_HOTELS:
      return Object.assign({}, state, {
        hotels: [
          ...state.hotels,
          {
            name: action.name,
            rating: action.rating,
            amenities: action.amenities,
            cost: action.cost,
            propertyCode: action.propertyCode,
            address: action.address,
            contacts: action.contacts,
            marketingText: action.marketingText
          }
        ]
      });

    case HOTEL_DETAIL:
      return Object.assign({}, state, {
        hotelDetail: {
          name: action.name,
          rating: action.rating,
          amenities: action.amenities,
          cost: action.cost,
          propertyCode: action.propertyCode,
          address: action.address,
          contacts: action.contacts,
          marketingText: action.marketingText
        }
      });

    case CLEAR_HOTELS:
      return Object.assign({}, state, {
        hotels: []
      });

      default:
        return state;
  }
}

export default hotels;