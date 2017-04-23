import React, { Component } from 'react';


class ResetPassword extends Component {
  render() {
    return (
      <div>
        <h1>Reset Password</h1>

        <form>
          <input type='email' placeholder='Email' autocomplete='off' />
          <br />
          <input type='password' placeholder='New Password' autocomplete='off' />
          <br />
          <input type='password' placeholder='Confirm New Password' autocomplete='off' />
          <br />
          <select name="security_question">
            <option value="What is your favorite color?">What is your favorite color?</option>
            <option value="What is the name of the high school you attended?">What is the name of the high school you attended?</option>
            <option value="What city were you born in?">What city were you born in?</option>
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

export default ResetPassword;
