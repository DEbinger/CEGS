// jshint esversion:6

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions/usersAction';
import getUserReq from '../../lib/userReq';
// import { SignUp } from './SignUp';
// import { addUserToState } from '../redux/actions/usersAction';
import { Redirect } from 'react-router-dom';


class Profile extends Component {
  constructor(props){
    super(props);
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


// addUser(user){
//  getUserReq(user)
//    .then( user => {
//      console.log('UserProfile getUser', user);
//      this.props.onAddUser(user);
//    })
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
                <li> {users.first_name} {users.last_name}</li>
                <li> {users.email} </li>
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
