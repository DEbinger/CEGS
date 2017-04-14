import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>SIGN UP PAGE</h1>

        <form>
          <input type='text' placeholder='First Name' autocomplete='off' />
          <input type='text' placeholder='Last Name' autocomplete='off' />
          <input type='text' placeholder='Password' autocomplete='off' />
          <input type='text' placeholder='Confirm Password' autocomplete='off' />
          <input type='text' placeholder='Email Address' autocomplete='off' />
          <input type='submit' value='Sign Up' />
        </form>
      </div>
    );
  }
}

export default SignUp;