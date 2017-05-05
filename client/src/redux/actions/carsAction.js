// jshint esversion:6

export const LIST_CARS = 'LIST_CARS';
export const CAR_DETAILS = 'CAR_DETAILS';
export const ADD_CAR = 'ADD_CAR';
export const CLEAR_CARS = 'CLEAR_CARS';
export const SEARCH_CARS = 'SEARCH_CARS';
export const CAR_ITINERARY = 'CAR_ITINERARY';

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

export function addCar(pick_up, drop_off, airport, company_name, vehicle_type, amount) {
  return {
    type: ADD_CAR,
    pick_up,
    drop_off,
    airport,
    company_name,
    vehicle_type,
    amount
  };
}

export function clearCars() {
  return {
    type: CLEAR_CARS
  };
}

export function searchCars(location, pick_up, drop_off) {
  return {
    type: SEARCH_CARS,
    location,
    pick_up,
    drop_off
  };
}

export function carItinerary(pick_up, drop_off, airport, company_name, vehicle_type, amount) {
  return {
    type: CAR_ITINERARY,
    pick_up,
    drop_off,
    airport,
    company_name,
    vehicle_type,
    amount
  };
}