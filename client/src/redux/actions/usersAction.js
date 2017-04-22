export const ADD_USER = 'ADD_USER';
export const ADD_USER_TO_STATE = 'ADD_USER_TO_STATE';

export function addUser(first_name, last_name, email, password, security_question, security_answer) {
  return {
    type: ADD_USER,
    first_name,
    last_name,
    email,
    password,
    security_question,
    security_answer
  };
}

export function addUserToState(id, firstName, lastName, email, password){
  return {
    type: ADD_USER_TO_STATE,
    id,
    firstName,
    lastName,
    email,
    password
  };
}