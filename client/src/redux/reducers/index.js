import { ADD_USER } from '../actions';

const initialState = {
  users: []
};

function users(state = initialState, action) {
  switch(action.type) {
    case ADD_USER:
      return Object.assign({}, state, {
        users: [
          ...state.users,
          {
            firstName: action.firstName,
            lastName: action.lastName,
            email: action.email,
            password: action.password,
            securityQuest: action.securityQuestion
          }
        ]
      });

    default:
      return state;
  }
}

export default users;