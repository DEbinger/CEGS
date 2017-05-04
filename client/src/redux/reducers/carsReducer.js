// jshint esversion:6

import {
  LIST_CARS,
  CAR_DETAILS,
  ADD_CAR,
  CLEAR_CARS,
  SEARCH_CARS,
  CAR_ITINERARY
} from '../actions/carsAction';

const initialState = {
  cars: [],
  car_details: {}
};

function cars(state = initialState, action) {
  switch(action.type) {
    case LIST_CARS:
      return Object.assign({}, state, {
        cars: [
          ...state.cars,
          {
            company_name: action.company_name,
            airport: action.airport,
            city: action.city,
            cars: action.cars
          }
        ]
      });

    case CAR_DETAILS:
      return Object.assign({}, state, {
        car_details: {
          company_name: action.company_name,
          airport: action.airport,
          city: action.city,
          amount: action.amount,
          vehicle_type: action.vehicle_type,
          category: action.category,
          transmission: action.transmission,
          fuel: action.fuel
        }
      });

    case ADD_CAR:
      return Object.assign({}, state, {
        cars: [
          ...state.cars,
          {
            pick_up: action.pick_up,
            drop_off: action.drop_off,
            airport: action.airport,
            company_name: action.company_name,
            vehicle_type: action.vehicle_type,
            amount: action.amount
          }
        ]
      });

    case CLEAR_CARS:
      return Object.assign({}, state, {
        cars: []
      });

    case SEARCH_CARS:
      return Object.assign({}, state, {
        search_cars: {
          location: action.location,
          pick_up: action.pick_up,
          drop_off: action.drop_off
        }
      });

    case CAR_ITINERARY:
      return Object.assign({}, state, {
        car_itinerary: {
          pick_up: action.pick_up,
          drop_off: action.drop_off,
          airport: action.airport,
          company_name: action.company_name,
          vehicle_type: action.vehicle_type,
          amount: action.amount
        }
      });

      default:
        return state;
  }
}

export default cars;