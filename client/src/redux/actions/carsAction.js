export const ADD_CAR = 'ADD_CAR';
export const LIST_CARS = 'LIST_CARS';
export const CLEAR_CARS = 'CLEAR_CARS';

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

export function listCars(company_name, airport, city, cars) {
  return {
    type: LIST_CARS,
    company_name,
    airport,
    city,
    cars
  };
}

export function clearCars() {
  return {
    type: CLEAR_CARS
  };
}