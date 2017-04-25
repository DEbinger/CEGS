// jshint esversion:6

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import getUserReq from '../../lib/userReq';
import { addUser } from '../redux/actions/usersAction';
import { addUserToState } from '../redux/actions/usersAction';
import { SignUp } from './SignUp';

class Profile extends Component {
  constructor(props){
    super(props);
  }

   addUser(user){
   getUserReq(user)
     .then( user => {
       console.log('UserProfile getUser', user);
       this.props.onAddUser(user.id, user.first_name, user.last_name, user.email, user.security_question, user.security_answer);
     });
 }

  // xhrLoginCheck(user){
  //   return new Promise(function(resolve,reject){
  //     function reqListener(){
  //       resolve(this.responseText);
  //     }
  //     let oReq = new XMLHttpRequest();
  //     oReq.open('GET', '/users/profile');
  //     // oReq.setRequestHeader('Content-type',
  //     //   'application/json');
  //     oReq.addEventListener("load", reqListener);
  //     oReq.send();
  //   });
  // }

  // componentDidMount(){
  //   this.xhrLoginCheck()
  //   .then((userData)=>{
  //     console.log(this.props);
  //     let user = JSON.parse(userData);
  //     this.props.onAddUser(user.id, user.email);
  //   })
  //   .catch(function(err){
  //     console.log("component will mount error",err);
  //   });
  // }

 render(){
   console.log('this.props.users: ', this.props.users);
   console.log('this.props.users[0]: ', this.props.users[0]);
   return (
     <div>
      <h1>USER PROFILE</h1>

        {
          // mapping out the users array index 0 object
          this.props.users.map( (users ) => {
            return <div>

              <ul>
                <li> User: {users.first_name} {users.last_name}</li>
                <li> Email: {users.email} </li>
                <li> Security Question: {users.security_question} </li>
                <li> <Link to='/resetpassword'>Reset My Password</Link>
                </li>
              </ul>

              </div>
          })
        }
     </div>

   )
 }
}

const mapStateToProps = (state) => {
  return{
    users: state.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    onAddUser: (user) => {
      dispatch(addUser(user));
    }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps)(Profile)
