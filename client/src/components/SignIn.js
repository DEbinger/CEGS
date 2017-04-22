// jshint esversion:6

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {

  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this.handleEmail=this.handleEmail.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log('test function of handleSubmit');
    event.preventDefault();
    this.userIsLoggedIn({
      email: this.state.email,
      password: this.state.password
    })
    .then((data) => {
      console.log("Data",data);
      if(data){
        this.props.history.push('/profile');
      }
        this.setState = {
        email: '',
        password: ''
     };
    });
  }

  handleEmail(event){
    this.setState({
      email : event.target.value
    });
  }

  handlePassword(event){
    this.setState({
      password : event.target.value
    });
  }


  userIsLoggedIn(user){
    user.username = user.email;
    console.log(user);
    return new Promise(function(resolve,reject){
      var oReq = new XMLHttpRequest();
      function reqListener(dataReturn){
        console.log(dataReturn);
      }
      oReq.open('POST', '/users/signin', true);
      oReq.setRequestHeader('Content-type',
        'application/json');
      oReq.addEventListener("load", reqListener);
      oReq.send(JSON.stringify(user));
    });
  }

  render() {
    return (
      <div className='userSignIn'>
        <h1>SIGN IN</h1>

        <form onSubmit={this.handleSubmit}>
          <input type='email' onChange={this.handleEmail} placeholder='Email Address' autoComplete='off' />
          <br />
          <input type='password' onChange={this.handlePassword} placeholder='Password' autoComplete='off' />
          <br />
          <input type='submit' value='Sign In' />
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