import React, { Component } from 'react';


class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>Reset Password</h1>

        <form>
          <input type='email' placeholder='Email Address' autocomplete='off' />
          <br />
          <input type='password' placeholder='New Password' autocomplete='off' />
          <br />
          <input type='password' placeholder='Confirm New Password' autocomplete='off' />
          <br />
          <select name="security_question">
            <option value="color">What is your favorite color?</option>
            <option value="school">What is the name of the high school you attended?</option>
            <option value="birthplace">What city were you born in?</option>
          </select>
          <br />
          <input type='text' placeholder='Security Answer' autocomplete='off' />
          <br />
          <input type='submit' value='Reset' />
        </form>
      </div>
    );
  }
}

export default SignUp;