export const LIST_HOTELS = 'LIST_HOTELS';

export function listHotels(location, check_in, check_out, amenity, itinerary, user) {
  return {
    type: LIST_HOTELS,
    location,
    check_in,
    check_out,
    amenity,
    itinerary,
    user
  };
}