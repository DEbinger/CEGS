// jshint esversion:6

import { ADD_USER } from '../actions/usersAction';
import { USER_ERROR_MESSAGE } from '../actions/usersAction';
import { ADD_USER_TO_STATE } from '../actions/usersAction';
import { LOG_OUT_FROM_STATE } from '../actions/usersAction';
import { USER_ITINERARY } from '../actions/usersAction';

const initialState = {
  users: [],
  userItineraries: []
};

function users(state=initialState , action){
  switch(action.type){
    case ADD_USER:
    return Object.assign({}, state, {
      users: [
        ...state.users, {
          email: action.email,
          password: action.password
        }
      ]
    });

    case USER_ERROR_MESSAGE:
      return Object.assign({}, state, {
        userErrorMsg: action.userErrorMessage
      });

    case ADD_USER_TO_STATE:
    return Object.assign({}, state, {
      loggedInUser: {
          id: action.id,
          email: action.email,
          loggedIn: action.loggedIn
        }
    });

    case LOG_OUT_FROM_STATE:
    console.log("reducer logging out", action);
    return Object.assign({}, state, {
      loggedInUser: null
    });

    case USER_ITINERARY:
      return Object.assign({}, state, {
        userItineraries: [
          ...state.userItineraries,
          {
            itineraryId: action.itineraryId,
            car: action.car,
            flight: action.flight,
            hotel: action.hotel,
            createdAt: action.createdAt
          }
        ]
      });

    default:
      return state;

    }
}

export default users;