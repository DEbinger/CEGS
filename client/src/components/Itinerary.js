import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

class Itinerary extends Component {

  flight(){
    if(this.props.flightItinerary !== undefined) {
      let flight = this.props.flightItinerary;
      return <div className="itineraryResults">
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
      return <div className="itineraryResults">
          <ul>
            <li>{hotel.hotelName}</li>
            <li>{hotel.check_in}</li>
            <li>{hotel.check_out}</li>
            <li>Amount: ${hotel.saleTotal}</li>
          </ul>
        </div>
    } else {
      return <p>No hotel selected</p>
    }
  }

  car(){
    if(Object.keys(this.props.cars.car_details).length !== 0){
      let car = this.props.cars.car_details;

      return <div className="itineraryResults">
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

  render() {
    console.log('props from ITINERARY:', this.props);
  	console.log('HOTEL: ', this.props.hotelItinerary);
    console.log('CAR: ', this.props.cars.car_details);
    console.log('FLIGHT: ', this.props.flightItinerary);
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
    flightItinerary: state.flights.flightItinerary
  }
};

export default connect(
  mapStateToProps
)(Itinerary);