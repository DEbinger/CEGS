import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {

  constructor(){
    super();

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      security_question: '',
      security_answer: ''
    };
  }


  submitHandler(event) {
    event.preventDefaul();
    let oReq = new XMLHttpRequest();
    oReq.addEventListener('load', (user) => {
      let data = JSON.parse(user.target.responseText);
      console.log(data);
    });

    oReq.open('GET', '/signup');
    oReq.send();
  }

  render() {
    return (
      <div>
        <h1>SIGN IN</h1>

        <form>
          <input type='email' placeholder='Email Address' autoComplete='off' />
          <br />
          <input type='password' placeholder='Password' autoComplete='off' />
          <br />
          <input type='submit' value='Login' />
          <br />
        	<Link to='/resetpassword'>Reset My Password</Link>
        </form>
        <input type='submit' value='Continue with Google' />
        <input type='submit' value='Continue with Facebook' />
      </div>
    );
  }
}

export default SignIn;