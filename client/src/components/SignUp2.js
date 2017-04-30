import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';


const submit = ({ firstName = '', lastName = '', email = '', password = '', confirmPassword = '', securityQuestion = '' , securityAnswer = ''}) => {
  
  let error = {};
  let isError = false;

  // firstName validation
  if ( firstName.trim() === '' ) {
    error.firstName = 'Required';
    isError = true;
  } else if ( firstName.length > 32 ) {
    error.firstName = 'Name exceeds character limit';
    isError = true;
  } else if ( firstName.length >= 1  && firstName.length < 4 ) {
    error.firstName = 'Name must be longer than 4 characters';
    isError = true;
  } else if (firstName.trim().match(/\d+/)) {
    error.firstName = 'Name cannot contain numbers';
    isError = true;
  }

  // lastName validation
  if ( lastName.trim() === '' ) {
    error.lastName = 'Required';
    isError = true;
  } else if ( lastName.length > 32 ) {
    error.lastName = 'Name exceeds character limit';
    isError = true;
  } else if ( lastName.length >= 1  && lastName.length < 4 ) {
    error.lastName = 'Name must be longer than 4 characters';
    isError = true;
  } else if (lastName.trim().match(/\d+/)) {
    error.lastName = 'Name cannot contain numbers';
    isError = true;
  }

  // email validation
  if ( email.trim() === '' ) {
    error.email = 'Required';
    isError = true;
  } else if (!email.trim().match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)){
    error.email = 'Email not valid';
    isError = true;
  }

  // password validation

  if ( password.trim() === '' ) {
    error.password = 'Required';
    isError = true;
  } else if ( !password.trim().match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/) ){
    error.password = 'Must contain at least one Uppercase letter, lowercase letter, symbol, and number. Must be at least 8 characters long.';
    isError = true;
  }

  if (confirmPassword.trim() === '' ){
    error.confirmPassword = 'Required';
    isError = true;
  } else if ( confirmPassword.trim() !== password.trim() ){
    error.confirmPassword = 'Passwords do not match';
    isError = true;
  }


  // firstName validation
  if ( securityQuestion.trim() === '' ) {
    error.securityQuestion = 'Required';
    isError = true;
  }

  console.log(securityQuestion.trim());

  if (isError) {
    throw new SubmissionError(error);
  }else{
    // submit form to server
    // or something else
  }
}

const renderInputField = ({input, placeholder, type, meta:{touched, error} }) => (
  <div className="input-row">
    <br />
    <input {...input} placeholder={placeholder} type={type}/>
    { touched && error &&
     <span className="error">{error}</span>}
  </div>
);

const securityQuestions = [
  {
    option: {
      text: 'Select a Security Question',
      value: ''
    }
  },
  {
    option: {
      text: 'What is your favorite color?',
      value: 'What is your favorite color?'
    }
  },
  {
    option: {
      text: 'What is the name of the high school you attended?',
      value: 'What is the name of the high school you attended?'
    }
  },
  {
    option: {
      text: 'What is the name of the city you were born in?',
      value: 'What is the name of the city you were born in?'
    }
  }
];

const renderSelectField = ({input, placeholder, type, meta:{touched, error}, children }) => (
  <div className="select-row">
    <br />
    <select {...input}>
      {children}
    </select>
    { touched && error &&
     <span className="error">{error}</span>}
  </div>
);

const SignUpFunc = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit(submit)}>
    <Field name="firstName"
      placeholder="First Name"
      component={renderInputField}
      type="text"
    />
    <Field name="lastName"
      placeholder="Last Name"
      component={renderInputField}
      type="text"
    />
    <Field name="email"
      placeholder="Email Address"
      component={renderInputField}
      type="email"
    /> 
    <Field name="password"
      placeholder="Password"
      component={renderInputField}
      type="password"
    />
    <Field name="confirmPassword"
      placeholder="Confirm Password"
      component={renderInputField}
      type="password"
    />
    <div>
    <br />
    <Field name="securityQuestion"
      component={renderSelectField}>
      { securityQuestions.map(option => <option value={option.value}>{option.text}</option> ) }
    </Field>
    </div>
    <Field name="securityAnswer"
      placeholder="Security Answer"
      component={renderInputField}
      type="text"
    />
    <br />
    <button type="submit">Submit</button>
  </form>
);

// Decorate the form component
const SignUp2 = reduxForm({
  form: 'signUp' // a unique name for this form
})(SignUpFunc);

export default SignUp2;