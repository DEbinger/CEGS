// jshint esversion:6

import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { Redirect } from ‘react-router-dom’;
// import { Link } from ‘react-router-dom’;
import getUserReq from '../../lib/userReq';
import { addUser } from '../redux/actions/usersAction';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'gyfqpzrn';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/hele.io/upload';


class Profile extends React.Component {
 constructor(props){
  super(props);

  this.state = {
    uploadedFileCloudinaryUrl: ''
  };

  this.signOut = this.signOut.bind(this);
 }

onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file)
      .end(file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
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
    <form>
    <h1>USER PROFILE</h1>
      <div>
        <div className="FileUpload">
          <Dropzone
            multiple={false}
            accept="image/jpg,image/png"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
        </div>

        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
          <div>
            <p>{this.state.uploadedFile.name}</p>
            <img src={this.state.uploadedFileCloudinaryUrl} />
          </div>}
        </div>
      </div>
    </form>
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