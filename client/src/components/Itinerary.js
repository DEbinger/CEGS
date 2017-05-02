import React, { Component } from 'react';
import { connect } from 'react-redux';

class Itinerary extends Component {

	constructor(props) {
		super(props);

	}

  hotel(){
    if(Object.keys(this.props.hotels.hotelDetail).length !== 0){
      let hotel = this.props.hotels.hotelDetail;
      return <div>
          <p>{hotel.name}</p>
          <p>{hotel.address.line1}, {hotel.address.city}, {hotel.address.region} {hotel.address.postal_code}</p>
          { hotel.contacts.map( ({ detail, type }) => <p>{ type }: { detail }</p> )}
          <p>{hotel.rating}</p>
          <p>{hotel.amenities}</p>
          <p>{hotel.cost}</p>
        </div>
    } else {
      return <p>No hotel selected</p>
    }
  }

  car(){
    if(Object.keys(this.props.cars.car_details).length !== 0){
      let car = this.props.cars.car_details;

      return <div>
          <p>{car.company_name}</p>
          <p>{car.airport}</p>
          <p>{car.city}</p>
          <p>{car.category}</p>
          <p>{car.vehicle_type}</p>
          <p>{car.transmission}</p>
          <p>{car.amount}</p>
          <p>{car.fuel}</p>
        </div>
    } else {
      return <p>No car selected</p>
    }
  }

  render() {
    console.log('props from ITINERARY:', this.props);
  	console.log('HOTEL: ', this.props.hotels.hotelDetail);
    console.log('CAR: ', this.props.cars.car_details);
    return (
    	<div>
      	<h1>ITINERARY PAGE</h1>

      		<div>
      			<h3>Flight</h3>
            <p>No flight selected</p>
      		</div>

	      	<div>
	      		<h3>Hotel</h3>
            { this.hotel() }
					</div>

					<div>
						<h3>Car</h3>
            { this.car() }
					</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hotels: state.hotels,
    cars: state.cars,
    hotelItinerary: state.hotels.hotelItinerary
  }
};

export default connect(
  mapStateToProps
)(Itinerary);