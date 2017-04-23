import { ADD_USER } from '../actions/usersAction';

const initialState = [];

function users(state = initialState, action) {
  console.log("REDUCER: ", state);
  switch(action.type) {
    case ADD_USER:
        return [
              action.user
          ];

        // return [action.user];

    default:
      return state;
  }
}

export default users;