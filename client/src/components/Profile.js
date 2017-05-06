// jshint esversion:6

import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions/usersAction';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import Sidebar from '../components/Sidebar';

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
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

 signOut(event) {
   event.preventDefault();
   let oReq = new XMLHttpRequest();

   oReq.addEventListener('load', (result) => {
   });
   oReq.open('GET', '/users/signout');
   oReq.send();
 }

 render(){
   return (
    <div className="componentWithSidebar">
      <Sidebar />
      <div id="userProfile" className="user">
        <h1>User Profile</h1>
        <form>
          <div id="userProfilePicUploader">
            <div className="FileUpload">
              <Dropzone
                multiple={false}
                accept="image/jpg,image/png"
                onDrop={this.onImageDrop.bind(this)}>
                <p>Drop an image or click to select a file to upload.</p>
              </Dropzone>
            </div>

            <div id="userProfilePic">
              {this.state.uploadedFileCloudinaryUrl === '' ? null :
              <div>
                <p>{this.state.uploadedFile.name}</p>
                <img alt='' src={this.state.uploadedFileCloudinaryUrl} />
              </div>}
            </div>
          </div>
        </form>
      </div>
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