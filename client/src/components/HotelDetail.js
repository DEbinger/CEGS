import React, { Component } from 'react';
import { connect } from 'react-redux';

class HotelDetail extends Component {


hotelDescription() {
  if (this.props.hotels.hotelDetail.marketingText) {
    return <p>Description: { this.props.hotels.hotelDetail.marketingText }</p>;
  }
}

  render() {

    let hotel = this.props.hotels.hotelDetail;

    return (
      <div>
        <h1>HOTEL DETAIL PAGE</h1>
        <h1>{ hotel.name }</h1>
        { this.hotelDescription() }
        <p>Amenities: { hotel.amenities }</p>
        <p>Lowest Total Cost: { hotel.cost }</p>
        <p>Rating: { hotel.rating }</p>
        <p>Address:</p>
        <p>{ hotel.address.line1 }</p>
        <p>{ hotel.address.city }, { hotel.address.region }, { hotel.address.postal_code }</p>
        { hotel.contacts.map( ({ detail, type }) => <p>{ type }: { detail }</p> )}
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
)(HotelDetail);