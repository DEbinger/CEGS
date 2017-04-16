export const LIST_HOTELS = 'LIST_HOTELS';
export const ADD_HOTEL = 'ADD_HOTEL';

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

export function listHotels(name, rating, amenities, cost) {
  return {
    type: LIST_HOTELS,
    name,
    rating,
    amenities,
    cost
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