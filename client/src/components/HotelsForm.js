import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  listHotels,
  clearHotels,
  searchHotels
} from '../redux/actions/hotelsAction';
import Sidebar from '../components/Sidebar';

class HotelsForm extends Component {
  constructor() {
    super();
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    let form = document.getElementsByClassName('hotels-form');
    const values = `location=${form.location.value}&check_in=${form.checkIn.value}&check_out=${form.checkOut.value}`;
    this.props.onSearch(form.location.value, form.checkIn.value, form.checkOut.value);
    let oReq = new XMLHttpRequest();
    oReq.addEventListener('load', (results) => {

      this.props.onClearHotels();

      let hotels = JSON.parse(results.target.responseText);

      hotels.results.forEach( hotel => {

        let rating = hotel.awards[0];
        if ( rating === undefined ) {
          rating = 'N/A';
        } else {
          rating = hotel.awards[0].rating;
        }

        this.props.onHotelsSearch(
          hotel.property_name,
          rating,
          hotel.amenities,
          hotel.total_price.amount,
          hotel.property_code,
          hotel.address,
          hotel.contacts,
          hotel.marketing_text
        );
      });
      this.props.history.push('/hotels');
    });
    oReq.open('POST', '/hotels/list', true);
    oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    oReq.send(values);

  }

  render() {
    return (
      <div className="componentWithSidebar">
        <Sidebar />
      	<div id="hotelForm" className="hotel">
        	<h1>Find a Hotel</h1>
  				<form onSubmit={ this.submitHandler }>
  					<input className="hotels-form" type="text" placeholder="Location" autoComplete='off' name="location" autoFocus/>
  					<br />
  					<label>
  						Check In:
  						<input className="hotels-form" type="date" name="checkIn" />
  					</label>
  					<br />
  					<label>
  						Check Out:
  						<input className="hotels-form" type="date" name="checkOut" />
  					</label>
  					<br />
  					<input type="submit" value="Search Hotels" />
  				</form>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onHotelsSearch: (name, rating, amenities, cost, propertyCode, address, contacts, marketingText) => {
      dispatch(listHotels(name, rating, amenities, cost, propertyCode, address, contacts, marketingText))
    },
    onClearHotels: () => {
      dispatch(clearHotels())
    },
    onSearch: (airport, check_in, check_out) => {
      dispatch(searchHotels(airport, check_in, check_out))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotelsForm);