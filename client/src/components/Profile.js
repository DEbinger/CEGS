// jshint esversion:6

import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { Redirect } from ‘react-router-dom’;
// import { Link } from ‘react-router-dom’;
import getUserReq from '../../lib/userReq';
import { addUser } from '../redux/actions/usersAction';
// import fetch from ‘node-fetch’;

class Profile extends Component {
 constructor(props){
   super(props);

   this.signOut = this.signOut.bind(this);
 }

 // addUser(user){
 //   getUserReq(user)
 //    .then( user => {
 //      console.log(‘UserProfile getUser’, user);
 //      this.props.onAddUser(user);
 //    });
 // }

 // xhrLoginCheck(user){
 //   return new Promise(function(resolve,reject){
 //     function reqListener(){
 //       resolve(this.responseText);
 //     }
 //     let oReq = new XMLHttpRequest();
 //     oReq.open(‘FETCH’, ‘/users/profile’);
 //     oReq.addEventListener(“load”, reqListener);
 //     oReq.send(user);
 //   });
 // }

 // componentWillMount(){
 //   this.xhrLoginCheck()
 //   .then((userData)=>{
 //     console.log(this.props);
 //     let user = userData;
 //     this.props.onAddUser(user.id, user.email);
 //   })
 //   .catch(function(err){
 //     console.log(“Profile component will mount error”,err);
 //   });
 // }


//   componentWillMount(){
//  function xhrLoginTest(){
//   fetch(‘/users/profile’, {method: ‘GET’})
//     .then(userData => {
//       let user = userData;
//       this.props.onAddUser(user.id, user.email);
//     })
//     .catch(function(err){
//       console.log(“Profile component will mount error”,err);
//     });
//   }
//   xhrLoginTest();
// }

 signOut(event) {
   event.preventDefault();
   console.log('SIGN OUT CLICKED');

   console.log('creating OREQ');
   let oReq = new XMLHttpRequest();
   console.log(oReq);
   oReq.addEventListener('load', (result) => {
     console.log(result.target.responseText);
   });
   console.log('opening request');
   oReq.open('GET', '/users/signout');
   console.log('sending request');
   oReq.send();
 }


 render(){
   console.log('FROM PROFILE', this.props);
   return (
    <div>
     <h1>USER PROFILE</h1>

     <button onClick={ this.signOut }>Sign Out</button>

    </div>
   );
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
       // {
       //   // mapping out the users array index 0 object
       //     return <div>

       //       <ul>
       //         <li> User: {users.first_name} {users.last_name}</li>
       //           <li> Email: {users.email} </li>
       //           <li> Security Question: {users.security_question} </li>
       //           <li> <Link to=‘/resetpassword’>Reset My Password</Link></li>
       //         </ul>

       //     </div>
       // }