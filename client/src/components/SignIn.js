import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUserToState } from '../redux/actions/usersAction';
import { Router, browserHistory } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { addUser } from '../redux/actions/usersAction';

class SignIn extends React.Component {

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
    event.preventDefault();
    this.userIsLoggedIn({
      email: this.state.email,
      password: this.state.password
    })
    .then((data) => {
      console.log("Data handle submit",data);
      if(data){
        this.props.history.push('/profile');
      }
    })
    .catch(err => {
      console.log('error not logged in');
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
        let results = this.responseText;
        console.log('This is the userLoggedIn',results)
        if (results !== '/profile') {
        reject(results);
        } else {
        resolve(results);
        }
      }
      oReq.open('POST', '/users/signin', true);
      oReq.setRequestHeader('Content-type','application/json');
      oReq.addEventListener("load", reqListener);
      oReq.send(JSON.stringify(user));
    });
  }

  render(){
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
        <input type='submit' value='Continue with Google' />
          <br />
        <input type='submit' value='Continue with Facebook' />
          <br />
      </div>
    )
  }
}

export default SignIn;