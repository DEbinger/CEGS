import React, { Component } from 'react';
import { connect } from 'react-redux';

class Itinerary extends Component {

	constructor(props) {
		super(props);
		
	}

  render() {
  	console.log('HOTEL: ', this.props.hotels.hotelDetail);
  	let hotel = this.props.hotels.hotelDetail;
  	// let address = this.props.hotels.hotelDetail.address
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
					</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hotels: state.hotels
  }
};

export default connect(
  mapStateToProps
)(Itinerary);