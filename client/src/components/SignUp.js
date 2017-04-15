import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>SIGN UP</h1>
        <form>
          <input type='text' placeholder='First Name' autocomplete='off' />
          <br />
          <input type='text' placeholder='Last Name' autocomplete='off' />
          <br />
          <input type='email' placeholder='Email' autocomplete='off' />
          <br />
          <input type='password' placeholder='Password' autocomplete='off' />
          <br />
          <input type='password' placeholder='Confirm Password' autocomplete='off' />
          <br />
          <select name="security_question">
            <option>Select a Security Question</option>
            <option value="color">What is your favorite color?</option>
            <option value="school">What is the name of the high school you attended?</option>
            <option value="birthplace">What city were you born in?</option>
          </select>
          <br />
          <input type='text' placeholder='Security Answer' autocomplete='off' />
          <br />
          <input type='submit' value='Sign Up' />
        </form>
        <input type='submit' value='Sign Up with Google' />
        <input type='submit' value='Sign Up with Facebook' />
      </div>
    );
  }
}

export default SignUp;