export const LIST_CARS = 'LIST_CARS';

export function listCars(location, pick_up, drop_off, vehicle, itinerary, user) {
  return {
    type: LIST_CARS,
    location,
    pick_up,
    drop_off,
    vehicle,
    itinerary,
    user
  } ;
}