import { ADD_USER } from '../actions/usersAction';

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
            first_name: action.first_name,
            last_name: action.last_name,
            email: action.email,
            password: action.password,
            security_question: action.security_question,
            security_answer: action.security_answer
          }
        ]
      });

    default:
      return state;
  }
}

export default users;