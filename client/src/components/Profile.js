import React, {Component} from 'react'
import { connect } from 'react-redux';
import { addUser } from '../redux/actions/usersAction';
import getUserReq from '../../lib/userReq';
import { SignUp } from './SignUp';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

class Profile extends Component {
  constructor(props){
    super(props);
  }

  // xhrLoginCheck(){
  //   return new Promise(function(resolve,reject){
  //     function reqListener(){
  //       resolve(this.responseText);
  //     }
  //     let oReq = new XMLHttpRequest();
  //     oReq.open('POST', '/users/signin');
  //     oReq.setRequestHeader('Content-type',
  //       'application/json')
  //     oReq.addEventListener("load", reqListener)
  //     oReq.send()
  //   })
  // }

  // componentDidMount(){
  //   this.xhrLoginCheck()
  //   .then((userData)=>{
  //     console.log(this.props)
  //     let user = JSON.parse(userData)
  //     this.props.onAddUser(user.id, user.email)
  //   })
  //   .catch(function(err){
  //     console.log("component will mount error",err)
  //   })
  // }

   addUser(user){
   getUserReq(user)
     .then( user => {
       console.log('UserProfile getUser', user);
       this.props.onAddUser(user.id, user.first_name, user.last_name, user.email, user.security_question, user.security_answer);
     });
 }

 render(){
   console.log('this.props: ', this.props.users);
   return (
     <div>
     <h1>USER PROFILE</h1>

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
    onAddUser: (id, first_name, last_name, email, password, security_question, security_answer) => {
      dispatch(addUser(id, first_name, last_name, email, password, security_question, security_answer));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

//   render(){
//       console.log('this: ', this.props);

//     // if(this.props.loggedInUser) {
//     //   return (
//     //     <div>
//     //       <h1>this Profile</h1>
//     //     </div>
//     //   )
//     // }
//     // return (
//     //   <Redirect to={{
//     //     pathname: '/signin'
//     //   }}/>
//     // )

//     return (
//       <div>
//         <h1>USER PROFILE</h1>
//         <p>{this.props.first_name}</p>
//       </div>
//     )
//   }
// }

// const mapDispatchToProps = {
//   onAddUser: addUserToState
// }

// const mapStateToProps = (state) => {
//   console.log("STATE", state)
//   return {
//     loggedInUser: state.loggedInUser
//   }
// }

// export default connect(
//   mapStateToProps, mapDispatchToProps)(secret)

// export default Profile;