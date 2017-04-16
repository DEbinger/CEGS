import React, { Component } from 'react';

class SignUp extends Component {

constructor () {
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

  render() {
    return (
      <div>
        <h1>SIGN UP</h1>
        <form>
          <input type='text' name="first_name" value={this.state.first_name} placeholder='First Name' autoComplete='off' />
          <br />
          <input type='text' name="last_name" value={this.state.last_name} placeholder='Last Name' autoComplete='off' />
          <br />
          <input type='email' name="email" value={this.state.email} placeholder='Email' autoComplete='off' />
          <br />
          <input type='password' name="password" value={this.state.password} placeholder='Password' autoComplete='off' />
          <br />
          <input type='password' placeholder='Confirm Password' autoComplete='off' />
          <br />
          <select name="security_question" value={this.state.security_question}>
            <option selected disabled>Select a Security Question</option>
            <option value="color">What is your favorite color?</option>
            <option value="school">What is the name of the high school you attended?</option>
            <option value="birthplace">What city were you born in?</option>
          </select>
          <br />
          <input type='text' name="security_answer" value={this.state.security_answer} placeholder='Security Answer' autoComplete='off' />
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