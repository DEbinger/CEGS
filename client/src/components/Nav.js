// jshint esversion:6

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutFromState } from '../redux/actions/usersAction.js';

class Nav extends Component {
    constructor(props, context){
    super(props, context);

    this.logOut = this.logOut.bind(this);
  }

  xhrLoginCheck(){
    return new Promise(function(resolve,reject){
      function reqListener(){
        resolve(this.responseText);
      }
      let oReq = new XMLHttpRequest();
      oReq.open('GET', '/api/users/checkLogin');
      oReq.addEventListener("load", reqListener);
      oReq.send();
    });
  }

  componentWillMount(){
    this.xhrLoginCheck()
    .then((userData)=>{
      let user = userData;
      this.props.onAddUser(user.email, user.password, true);
    })
    .catch(function(err){
    });
  }

  xhrLogOut(){
    return new Promise(function(resolve,reject){
      function reqListener(){
        resolve(this.responseText);
      }
      let oReq = new XMLHttpRequest();
      oReq.open('GET', '/api/users/signout');
      oReq.addEventListener("load", reqListener);
      oReq.send();
    });
  }

  logOut(event){
    event.preventDefault();
    this.xhrLogOut()
    .then(() => {
      this.props.onLogOut();
      this.context.router.history.push('/');
    })
    .catch(err => {
      console.log('error user not logged in', err);
    });
  }


  render() {
    if (this.props.users.loggedInUser) {
    return (
      <div id="userNav">
        <h1>Adventure Awaits!</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <a id="signOutLink" href="#" onClick={this.logOut}>Sign Out</a>
        </ul>
      </div>
    )} else {
    return (
      <div id="nav">
        <h1>Adventure Awaits!</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/signin'>Sign In</Link></li>
          <li><Link to='/signup'>Sign Up</Link></li>
        </ul>
      </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => {
      dispatch(logOutFromState())
    }
  }
}

Nav.contextTypes = {
  router: PropTypes.object.isRequired
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Nav)