import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  render() {
    return (
      <div>
        <h1>SIGN IN</h1>

        <form>
          <input type='email' placeholder='Email Address' autocomplete='off' />
          <br />
          <input type='password' placeholder='Password' autocomplete='off' />
          <br />
          <input type='submit' value='Login' />
          <br />
        	<Link to='/resetpassword'>Reset My Password</Link>
        </form>
      </div>
    );
  }
}

export default SignIn;