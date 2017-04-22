// jshint esversion:6

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addUserToState } from '../redux/actions/usersAction';
import { Redirect } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  xhrLoginCheck(user){
    return new Promise(function(resolve,reject){
      function reqListener(){
        resolve(this.responseText);
      }
      let oReq = new XMLHttpRequest();
      oReq.open('GET', '/users/profile');
      oReq.setRequestHeader('Content-type',
        'application/json');
      oReq.addEventListener("load", reqListener);
      oReq.send(JSON.stringify(user));
    });
  }

  componentDidMount(){
    this.xhrLoginCheck()
    .then((userData)=>{
      console.log(this.props);
      let user = JSON.parse(userData);
      this.props.onAddUser(user.id, user.email);
    })
    .catch(function(err){
      console.log("component will mount error",err);
    });
  }

  render(){
    if(this.props.loggedInUser) {
      return (
        <div>
          <h1>this Profile</h1>
        </div>
      )
    }
    return (
      <Redirect to={{
        pathname: '/signin'
      }}/>
    )
  }
}

const mapDispatchToProps = {
  onAddUser: addUserToState
}

const mapStateToProps = (state) => {
  console.log("STATE", state)
  return {
    loggedInUser: state.loggedInUser
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps)(Profile)