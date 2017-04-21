import { ADD_USER } from '../actions/usersAction';

const initialState = {
  users: []
};

function users(state = initialState, action) {
  console.log("ACTION: ", action.password);
  switch(action.type) {
    case ADD_USER:
      if(users.password === users.confirm_password){  // does not work
        console.log('SUCCESS', users);                // can get action
        return Object.assign({}, state, {             // but hashes pws
          users: [                                    // need data before hash
            ...state.users,
            {
              id: action.id,
              first_name: action.first_name,
              last_name: action.last_name,
              email: action.email,
              password: action.password,
              confirm_password: action.confirm_password,
              security_question: action.security_question,
              security_answer: action.security_answer
            }
          ]
        });
      } else {
        console.log('Passwords don\'t match');
      }

    default:
      return state;
  }
}

export default users;