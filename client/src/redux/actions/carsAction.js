export const LIST_CARS_PICK_UP = 'LIST_CARS_PICK_UP';
export const LIST_CARS_DROP_OFF = 'LIST_CARS_DROP_OFF';
export const ADD_CAR = 'ADD_CAR';
export const CLEAR_CARS = 'CLEAR_CARS';

export function listCarsPickUp(company_name, airport, city, cars) {
  return {
    type: LIST_CARS_PICK_UP,
    company_name,
    airport,
    city,
    cars
  };
}

export function addCar(company_name, airport, city, cars, itinerary, user) {
  return {
    type: ADD_CAR,
    company_name,
    airport,
    city,
    cars,
    itinerary,
    user
  };
}

export function clearCars() {
  return {
    type: CLEAR_CARS
  };
}

export function listCarsDropOff(location, pick_up, drop_off, vehicle, itinerary, user) {
  return {
    type: LIST_CARS_DROP_OFF,
    location,
    pick_up,
    drop_off,
    vehicle,
    itinerary,
    user
  } ;
}