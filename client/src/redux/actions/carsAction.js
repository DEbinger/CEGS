export const LIST_CARS = 'LIST_CARS';
export const CAR_DETAILS = 'CAR_DETAILS';
export const ADD_CAR = 'ADD_CAR';
export const CLEAR_CARS = 'CLEAR_CARS';

export function listCars(company_name, airport, city, cars) {
  return {
    type: LIST_CARS,
    company_name,
    airport,
    city,
    cars
  };
}

export function carDetails(company_name, airport, city, amount, vehicle_type, category, transmission, fuel) {
  return {
    type: CAR_DETAILS,
    company_name,
    airport,
    city,
    amount,
    vehicle_type,
    category,
    transmission,
    fuel
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