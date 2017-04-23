export const ADD_USER = 'ADD_USER';
export const ADD_USER_TO_STATE = 'ADD_USER_TO_STATE';

export function addUser(user) {

  return {
    type: ADD_USER,
    user
  };
}

// export function addUserToState(id, firstName, lastName, email, password){
//   return {
//     type: ADD_USER_TO_STATE,
//     id,
//     firstName,
//     lastName,
//     email,
//     password
//   };
// }