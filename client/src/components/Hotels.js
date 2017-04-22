import React, { Component } from 'react';
import { connect } from 'react-redux';

class Hotels extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    console.log(this.props);
    return (
    	<div>
      	<h1>HOTELS LIST</h1>
        { this.props.hotels.hotels.map( ({ name, rating, amenities, cost }) =>
          <HotelDiv name={ name } rating={ rating } amenities={ amenities } cost={ cost } />
          ) }
      </div>
    );
  }
}

class HotelDiv extends Component {
  constructor(props){
    super(props);

  }

  listAmenities() {
    console.log('listAmenities');
    let values = '';

    this.props.amenities.forEach( ({ description }, idx) => {
      console.log(description);
      if ( idx === this.props.amenities.length - 1) {
        values += `${description}.`;
      } else {
        values += `${description}, `;
      }
    });

    return <p>Amenities: { values }</p>;
  }

  render() {
    return (
      <div>
        <h3>{ this.props.name }</h3>
        <p>Rating: { this.props.rating }</p>
        { this.listAmenities() }
        <p>Lowest Total Cost: { this.props.cost }</p>
        <hr/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hotels: state.hotels
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onHotelsSearch: (name, rating, amenities, cost) => {
    //   dispatch(listHotels(name, rating, amenities, cost))
    }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hotels);