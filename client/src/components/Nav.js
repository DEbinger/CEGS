import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUserToState, logOutFromState } from '../redux/actions/usersAction.js';

class Nav extends Component {
    constructor(props){
    super(props)

    this.logOut = this.logOut.bind(this);
  }

  xhrLoginCheck(){
    return new Promise(function(resolve,reject){
      function reqListener(){
        resolve(this.responseText);
      }
      let oReq = new XMLHttpRequest();
      oReq.open('GET', '/users/checkLogin');
      oReq.addEventListener("load", reqListener);
      oReq.send();
    });
  }

  componentDidMount(){
    this.xhrLoginCheck()
    .then((userData)=>{
      let user = userData;
      this.props.onAddUser(user.email, user.password, true);
    })
    .catch(function(err){
      console.log("Nav component will mount error" ,err);
    });
  }

 //  xhrLogOut() {
 //    let oReq = new XMLHttpRequest();
 //    oReq.open('GET', '/users/signout');
 //    oReq.addEventListener('load', (result) => {
 //      console.log(result);
 //    });
 //    oReq.send();
 // }

  // logOut(event) {
  //   event.preventDefault();
  //   xhrLogOut();
  // }

  xhrLogOut(){
    return new Promise(function(resolve,reject){
      function reqListener(){
        resolve(this.responseText);
      }
      let oReq = new XMLHttpRequest();
      oReq.open('GET', '/users/signout');
      oReq.addEventListener("load", reqListener);
      oReq.send(null);
    });
  }

  logOut(event){
    event.preventDefault();
    this.xhrLogOut()
    .then(()=>{
      this.props.onLogOut();
    });
  }


  render() {
    if (this.props.users.loggedInUser) {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <a href="#" onClick={this.logOut}>Sign Out</a>
        </ul>
      </div>
    )} else {
    return (
      <div>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Nav)