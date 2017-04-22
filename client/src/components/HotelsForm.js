import React, { Component } from 'react';
import { listHotels } from '../redux/actions/hotelsAction';
import { connect } from 'react-redux';

class HotelsForm extends Component {
  constructor() {
    super();
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    let form = document.getElementsByClassName('hotels-form');
    console.log('Location:', form.location.value);
    console.log('Check In:', form.checkIn.value);
    console.log('Check Out:', form.checkOut.value);
    const values = `location=${form.location.value}&check_in=${form.checkIn.value}&check_out=${form.checkOut.value}`;
    console.log('values', values);
    let oReq = new XMLHttpRequest();
    oReq.addEventListener('load', (results) => {
      let hotels = JSON.parse(results.target.responseText);
      // console.log('hotels', hotels);
      // console.log('first hotel', hotels.results[0]);
      // console.log('second hotel', hotels.results[1]);
      console.log(hotels);
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
          hotel.total_price.amount
        );
      });
      this.props.history.push('/hotels');
      // console.log(this.props);
    });
    oReq.open('POST', '/hotels/list', true);
    oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    oReq.send(values);

  }

  render() {
    console.log(this.props);
    return (
    	<div>
      	<h1>HOTELS FORM PAGE</h1>
				<form onSubmit={ this.submitHandler }>
					<input className="hotels-form" type="text" placeholder="Location" autoComplete='off' name="location" />
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
    onHotelsSearch: (name, rating, amenities, cost) => {
      dispatch(listHotels(name, rating, amenities, cost))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotelsForm);