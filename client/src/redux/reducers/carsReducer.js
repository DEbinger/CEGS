import { LIST_CARS, ADD_CAR, CLEAR_CARS } from '../actions/carsAction';

const initialState = {
  cars: []
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

    case ADD_CAR:
      return Object.assign({}, state, {
        cars: [
          ...state.cars,
          {
            location: action.location,
            pick_up: action.pick_up,
            drop_off: action.drop_off,
            vehicle: action.vehicle,
            itinerary: action.itinerary,
            user: action.user
          }
        ]
      });

   case CLEAR_CARS:
      return Object.assign({}, state, {
        cars: []
      });

      default:
        return state;
  }
}

export default cars;