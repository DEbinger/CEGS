export const ADD_HOTEL = 'ADD_HOTEL';
export const HOTEL_DETAIL = 'HOTEL_DETAIL';
export const CLEAR_HOTELS = 'CLEAR_HOTELS';

export function addHotel(location, check_in, check_out, amenity, itinerary, user) {
  return {
    type: ADD_HOTEL,
    location,
    check_in,
    check_out,
    amenity,
    itinerary,
    user
  };
}

export function hotelDetails(name, rating, amenities, cost, propertyCode, address, contacts, marketingText) {
  return {
    type: HOTEL_DETAIL,
    name,
    rating,
    amenities,
    cost,
    propertyCode,
    address,
    contacts,
    marketingText
  };
}

// export function hotelDetail(name, rating, cost, address, phoneNumber, description, amenities) {
//   return {
//     type: HOTEL_DETAIL,
//     name,
//     rating,
//     cost,
//     address,
//     phoneNumber,
//     description,
//     amenities
//   };
// }

export function clearHotels() {
  return {
    type: CLEAR_HOTELS
  };
}


// Hotel:
// -location search bar
// -check in/check out dates
// -number of rooms/guests
// -search button -> list of hotels page

// List of Hotels:
// -filter by cost, rating
// -sort by cost, rating
// -list of hotels (with picture, name, rating, ammenities, cost)
// -can click hotel to see additional details -> hotel detail page
// -select hotel button -> overview page

// Hotel Detail:
// -name, rating, cost
// -picture (can click through gallery)
// -address, website, phone number
// -description (with distance to nearest landmarks/attrations)
// -ammenities (wifi, etc.)
// -side bar has add to plan button -> overview page