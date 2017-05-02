import React, { Component } from 'react';
import { connect } from 'react-redux';

class Itinerary extends Component {

	constructor(props) {
		super(props);

	}

  hotel(){
    if(Object.keys(this.props.hotels.hotelDetail).length !== 0){
      let hotel = this.props.hotels.hotelDetail;
      return <div className="itineraryResults">
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
  	console.log('HOTEL: ', this.props.hotels.hotelDetail);
    console.log('CAR: ', this.props.cars.car_details);
    return (
    	<div id="itinerary">
      	<h1>Itinerary</h1>

      		<div className="itineraryResults">
      			<h3>Flight</h3>
            <p>No flight selected</p>
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