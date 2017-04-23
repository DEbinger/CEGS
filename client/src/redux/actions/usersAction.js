export const ADD_USER = 'ADD_USER';

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
