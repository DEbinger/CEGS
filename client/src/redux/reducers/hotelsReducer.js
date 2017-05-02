import {
  LIST_HOTELS,
  ADD_HOTEL,
  HOTEL_DETAIL,
  CLEAR_HOTELS,
  SEARCH_HOTELS,
  HOTEL_ITINERARY
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

    case SEARCH_HOTELS:
      return Object.assign({}, state, {
        searchValues: {
          airport: action.airport,
          check_in: action.check_in,
          check_out: action.check_out
        }
      });

    case HOTEL_ITINERARY:
      return Object.assign({}, state, {
        hotelItinerary: {
          check_in: action.check_in,
          check_out: action.check_out,
          airport: action.airport,
          hotelName: action.hotelName,
          saleTotal: action.saleTotal
        }
      });

      default:
        return state;
  }
}

export default hotels;