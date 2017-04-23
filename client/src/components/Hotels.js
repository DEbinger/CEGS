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
        { this.props.hotels.hotels.map( ({ name, rating, amenities, cost, propertyCode, address, contacts, marketingText }) =>
          <HotelDiv name={ name } rating={ rating } amenities={ amenities } cost={ cost } propertyCode={ propertyCode } address={ address } contacts={ contacts } marketingText={ marketingText } />
          ) }
      </div>
    );
  }
}


class HotelDiv extends Component {
  constructor(props){
    super(props);

    this.hotelsDetailReq = this.hotelsDetailReq.bind(this);
  }

  hotelsDetailReq() {
    console.log(this.props);
  }

  listAmenities() {
    let values = '';

    this.props.amenities.forEach( ({ description }, idx) => {
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
        <button onClick={ this.hotelsDetailReq }>Details</button>
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