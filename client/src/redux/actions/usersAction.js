export const ADD_USER = 'ADD_USER';

export function addUser(id,first_name, last_name, email, password, confirm_password, security_question, security_answer) {
  return {
    type: ADD_USER,
    id,
    first_name,
    last_name,
    email,
    password,
    confirm_password,
    security_question,
    security_answer
  };
}
