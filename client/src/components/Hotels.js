import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hotelDetail } from '../redux/actions/hotelsAction';

class Hotels extends Component {
  render() {
    console.log(this.props);
    return (
    	<div>
      	<h1>HOTEL RESULTS</h1>
        { this.props.hotels.hotels.map( ({
          name,
          rating,
          amenities,
          cost,
          propertyCode,
          address,
          contacts,
          marketingText
        }) =>
          <HotelDiv
          name={ name }
          rating={ rating }
          amenities={ amenities }
          cost={ cost }
          propertyCode={ propertyCode }
          address={ address }
          contacts={ contacts }
          marketingText={ marketingText }
          onDetail={ this.props.onDetail }
          history={ this.props.history } />
          ) }
      </div>
    );
  }
}


class HotelDiv extends Component {
  constructor(props){
    super(props);

    this.amenitiesValue = '';
    this.hotelsDetailReq = this.hotelsDetailReq.bind(this);
  }

  hotelsDetailReq() {
    this.props.onDetail(this.props.name, this.props.rating, this.amenitiesValue, this.props.cost, this.props.propertyCode, this.props.address, this.props.contacts, this.props.marketingText);
    this.props.history.push('/hoteldetail');
  }

  listAmenities() {

    this.props.amenities.forEach( ({ description }, idx) => {
      if ( idx === this.props.amenities.length - 1) {
        this.amenitiesValue += `${description}.`;
      } else {
        this.amenitiesValue += `${description}, `;
      }
    });

    return <p>Amenities: { this.amenitiesValue }</p>;
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
    onDetail: (name, rating, amenities, cost, propertyCode, address, contacts, marketingText) => {
      dispatch(hotelDetail(name, rating, amenities, cost, propertyCode, address, contacts, marketingText))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hotels);