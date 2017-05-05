// jshint esversion:6

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUserToState } from '../redux/actions/usersAction';
import { Router, browserHistory } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { addUser, userErrorMsg } from '../redux/actions/usersAction';

class SignIn extends React.Component {

  constructor(props){
    super(props);
    console.log(this.props);

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
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === '') {
      return this.props.onUserErrorMsg('Please enter your email to login');
    } else if ( !email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
      return this.props.onUserErrorMsg('Email is invalid');
    }

    if (password === '') {
      return this.props.onUserErrorMsg('Please enter your password');
    }

    this.userIsLoggedIn({
      email: this.state.email,
      password: this.state.password
    })
    .then((data) => {
      if(data){
        console.log('Data verfication',data);
        let userInfo = JSON.parse(data);
        this.props.onSignIn(userInfo.id, userInfo.email, true);
        this.props.history.push('/profile');
      }
    })
    .catch(err => {
      console.log('error user not logged in', err);
      return this.props.onUserErrorMsg('The email or password you entered is invalid. Please try again or reset your password.');
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
      function reqListener(dataReturn){
        let results = this.responseText;
        console.log('userIsLoggedIn is: ', results);
        if (results === null) {
        reject(results);
        } else {
        resolve(results);
        }
      }
      var oReq = new XMLHttpRequest();
      oReq.open('POST', '/users/signin', true);
      oReq.setRequestHeader('Content-type','application/json');
      oReq.addEventListener("load", reqListener);
      oReq.send(JSON.stringify(user));
    });
  }

  render(){
    return (
      <div id="signIn" className="user">
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit} ref="reset">
          <p>{this.props.users.userErrorMsg}</p>
          <input id="email" type='email' name="email" placeholder='Email' autoComplete='off' value={this.state.email} onChange={this.handleEmail} />
          <br />
          <input id="password" type='password' name="password" placeholder='Password' autoComplete='off' value={this.state.password} onChange={this.handlePassword} />
          <br />
          <input type='submit' value='Sign In' />
          <br />
          <Link to='/resetpassword'>Reset My Password</Link>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
  onSignIn: (id, email, loggedIn) => {
    dispatch(addUserToState(id, email, loggedIn))
    },
    onUserErrorMsg: (userErrorMessage) => {
      dispatch(userErrorMsg(userErrorMessage))
    }
  }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
   )(SignIn)