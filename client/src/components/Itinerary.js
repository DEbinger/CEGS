import React, { Component } from 'react';
import { connect } from 'react-redux';

class Itinerary extends Component {

	constructor(props) {
		super(props);
		
	}

  render() {
  	console.log('HOTEL: ', this.props.hotels.hotelDetail);
    console.log('CAR: ', this.props.cars.car_details);
  	let hotel = this.props.hotels.hotelDetail;
    let car = this.props.cars.car_details;
    return (
    	<div>
      	<h1>ITINERARY PAGE</h1>

      		<div>
      			<h3>Flight</h3>
      		</div>

	      	<div>
	      		<h3>Hotel</h3>
	      		<p>{hotel.name}</p>
	      		<p>{hotel.address.line1}, {hotel.address.city}, {hotel.address.region} {hotel.address.postal_code}</p>
	        	{ hotel.contacts.map( ({ detail, type }) => <p>{ type }: { detail }</p> )}
						<p>{hotel.rating}</p>
						<p>{hotel.amenities}</p>
						<p>{hotel.cost}</p>
					</div>

					<div>
						<h3>Car</h3>
            <p>{car.company_name}</p>
            <p>{car.airport}</p>
            <p>{car.city}</p>
            <p>{car.category}</p>
            <p>{car.vehicle_type}</p>
            <p>{car.transmission}</p>
            <p>{car.amount}</p>
            <p>{car.fuel}</p>
					</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hotels: state.hotels,
    cars: state.cars
  }
};

export default connect(
  mapStateToProps
)(Itinerary);