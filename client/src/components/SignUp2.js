import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';


const submit = ({ firstName = '', lastName = '', email = '' }) => {
  
  let error = {};
  let isError = false;

  if ( firstName.trim() === '' ) {
    error.firstName = 'Required';
    isError = true;
  }

  if ( firstName.length > 32 ) {
    error.firstName = 'Name exceeds character limit';
    isError = true;
  }

  if ( firstName.length >= 1  && firstName.length < 4 ) {
    error.firstName = 'Name must be longer than 4 characters';
    isError = true;
  }

  if (firstName.trim().match(/^\d/)) {
    error.firstName = 'Name cannot contain numbers';
    isError = true;
  }

  if ( lastName.trim() === '' ) {
    error.lastName = 'Required';
    isError = true;
  }


  if ( email.trim() === '' ) {
    error.email = 'Required';
    isError = true;
  }

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

const SignUpFunc = ({handleSubmit }) => (
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
    <br />
    <button type="submit">Submit</button>
  </form>
);

// Decorate the form component
const SignUp2 = reduxForm({
  form: 'signUp' // a unique name for this form
})(SignUpFunc);

export default SignUp2;