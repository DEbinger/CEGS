import React, {Component} from 'react'
import { connect } from 'react-redux';
// import { addUserToState } from '../actions';
import { Signin } from './SignIn';

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

  render(){
    // if(this.props.loggedInUser) {
    //   return (
    //     <div>
    //       <h1>this Profile</h1>
    //     </div>
    //   )
    // }
    // return (
    //   <Redirect to={{
    //     pathname: '/signin'
    //   }}/>
    // )

    return (
      <div>
        <h1>USER PROFILE</h1>
      </div>
    )
  }
}

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

export default Profile;