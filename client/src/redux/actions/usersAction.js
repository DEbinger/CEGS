// jshint esversion:6

export const ADD_USER = 'ADD_USER';
export const ADD_USER_TO_STATE = 'ADD_USER_TO_STATE';
export const LOG_OUT_FROM_STATE= 'LOG_OUT_FROM_STATE';

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

export function addUserToState(id, email, loggedIn){
  return {
    type: ADD_USER_TO_STATE,
    id,
    email,
    loggedIn
  };
}

export function logOutFromState(){
  console.log("logging out");
  return {
    type: LOG_OUT_FROM_STATE
  };
}