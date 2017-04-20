import React, { Component } from 'react';
import { connect } from 'react-redux';

class Hotels extends Component {
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
  render() {
    return (
      <div>
        <h3>{ this.props.name }</h3>
        <p>{ this.props.rating }</p>
        <p>{ this.props.amenties }</p>
        <p>{ this.props.cost }</p>
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