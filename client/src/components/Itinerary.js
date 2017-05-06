import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

class Itinerary extends Component {
  constructor(props) {
    super(props);

    this.saveItineraryHandler = this.saveItineraryHandler.bind(this);
  }

  flight(){
    if(this.props.flightItinerary !== undefined) {
      let flight = this.props.flightItinerary;
      return <div className="itinerarySections">
        <ul>
          <li>Origin: {flight.origin}</li>
          <li>Destination: {flight.destination}</li>
          <li>Departure Date: {flight.departureDate}</li>
          <li>Return Date: {flight.returnDepartureDate}</li>
          <li>Amount: {flight.saleTotal}</li>
        </ul>
      </div>
    } else {
      return <p>No flight selected</p>
    }
  }

  hotel(){
    if(this.props.hotelItinerary !== undefined) {
      let hotel = this.props.hotelItinerary;
      return <div className="itinerarySections">
          <ul>
            <li>{hotel.hotelName}</li>
            <li>Check In: {hotel.check_in}</li>
            <li>Check Out: {hotel.check_out}</li>
            <li>Amount: ${hotel.saleTotal}</li>
          </ul>
        </div>
    } else {
      return <p>No hotel selected</p>
    }
  }

  car(){
    if(this.props.carItinerary !== undefined){
      let car = this.props.carItinerary;

      return <div className="itinerarySections">
        <ul>
          <li>{car.company_name}</li>
          <li>Airport: {car.airport}, {car.city}</li>
          <li>Vehicle: {car.category}, {car.vehicle_type}, {car.transmission}</li>
          <li>Amount: ${car.amount}</li>
        </ul>
        </div>
    } else {
      return <p>No car selected</p>
    }
  }

  saveItineraryHandler(event) {
    event.preventDefault();

    let hotelInfo = this.props.hotelItinerary;
    let carInfo = this.props.carItinerary;
    let flightInfo = this.props.flightItinerary;
    let userInfo = this.props.userInfo.loggedInUser;

    let itinerary = {
      hotelInfo,
      carInfo,
      flightInfo,
      userInfo
    };

    let oReq = new XMLHttpRequest();
    oReq.addEventListener('load', (results) => {
      console.log(results);
    });
    oReq.open('POST', '/itinerary/saveItinerary');
    oReq.setRequestHeader('Content-Type', 'application/json');
    oReq.send(JSON.stringify(itinerary));
  }

  render() {
    return (
      <div className="componentWithSidebar">
        <Sidebar />
      	<div id="itinerary">
        	<h1>Itinerary</h1>

        		<div className="itineraryResults">
        			<h3>Flight</h3>
              { this.flight() }
        		</div>

  	      	<div className="itineraryResults">
  	      		<h3>Hotel</h3>
              { this.hotel() }
  					</div>

  					<div className="itineraryResults">
  						<h3>Car</h3>
              { this.car() }
  					</div>

            <button className="submitBtn" onClick={ this.saveItineraryHandler }>Save Itinerary</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hotels: state.hotels,
    cars: state.cars,
    hotelItinerary: state.hotels.hotelItinerary,
    flightItinerary: state.flights.flightItinerary,
    carItinerary: state.cars.carItinerary,
    userInfo: state.users
  }
};

export default connect(
  mapStateToProps
)(Itinerary);