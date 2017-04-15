import { LIST_CARS } from '../actions/carsAction';

const initialState = {
  cars: ['TEST CAR YO']
};

function cars(state = initialState, action) {
  switch(action.type) {
    case LIST_CARS:
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

      default:
        return state;
  }
}

export default cars;