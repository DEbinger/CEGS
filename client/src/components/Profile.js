// jshint esversion:6

import React from 'react';
import { connect } from 'react-redux';
import {
  addUser,
  userItinerary
} from '../redux/actions/usersAction';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import Sidebar from '../components/Sidebar';

import itineraryReq from '../../lib/userItineraryReq';

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

  // onImageDrop(files) {
  //     this.setState({
  //       uploadedFile: files[0]
  //     });

  //     this.handleImageUpload(files[0]);
  //   }

  // handleImageUpload(file) {
  //     let upload = request.post(CLOUDINARY_UPLOAD_URL)
  //       .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
  //       .field('file', file)
  //       .end(file);

  //     upload.end((err, response) => {
  //       if (err) {
  //       }

  //       if (response.body.secure_url !== '') {
  //         this.setState({
  //           uploadedFileCloudinaryUrl: response.body.secure_url
  //         });
  //       }
  //     });
  //   }

  componentWillMount() {
    let userId = this.props.users.loggedInUser.id;

    itineraryReq(userId, (results) => {
      let itineraries = JSON.parse(results.target.responseText);
      console.log('ITINERARIES:', itineraries);

      itineraries.forEach( itinerary => {
        this.props.onUserItinerary(itinerary.id, itinerary.Car, itinerary.Flight, itinerary.Hotel, itinerary.createdAt);
      })
    });
  }

  itineraryList(itinerary) {

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
    console.log('PROFILE PROPS:', this.props);
    return (
      <div className="componentWithSidebar">
        <Sidebar />
        <div id="userProfile" className="user">
          <h1>User Profile</h1>

          <ul>
            {
            this.props.users.userItineraries.map( itinerary => {
              return <li>
                <p>Itinerary: { itinerary.itineraryId }</p>
                <p>Origin: { itinerary.flight.origin }</p>
                <p>Destination: { itinerary.flight.destination }</p>
              </li>;
            })
            }
          </ul>
        </div>
      </div>
    );
  }
}
          // <form>
          //   <div id="userProfilePicUploader">
          //     <div className="FileUpload">
          //       <Dropzone
          //         multiple={false}
          //         accept="image/jpg,image/png"
          //         onDrop={this.onImageDrop.bind(this)}>
          //         <p>Drop an image or click to select a file to upload.</p>
          //       </Dropzone>
          //     </div>

          //     <div id="userProfilePic">
          //       {this.state.uploadedFileCloudinaryUrl === '' ? null :
          //       <div>
          //         <p>{this.state.uploadedFile.name}</p>
          //         <img alt='' src={this.state.uploadedFileCloudinaryUrl} />
          //       </div>}
          //     </div>
          //   </div>
          // </form>

const mapStateToProps = (state) => {
 return{
   users: state.users
 }
};

const mapDispatchToProps = (dispatch) => {
 return{
   onAddUser: (user) => {
     dispatch(addUser(user));
   },
   onUserItinerary: (itineraryId, car, flight, hotel, createdAt) => {
    dispatch(userItinerary(itineraryId, car, flight, hotel, createdAt))
   }
 }
}

export default connect(
 mapStateToProps, mapDispatchToProps)(Profile)