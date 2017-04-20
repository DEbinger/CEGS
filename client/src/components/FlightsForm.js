import React, { Component } from 'react';
import {
  listFlights,
  searchFlights
} from '../redux/actions/flightsAction';
import { connect } from 'react-redux';

class FlightsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: []
    };

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    let form = document.getElementsByClassName('flight-form');
    // let oReq = new XMLHttpRequest();
    // oReq.addEventListener("load", (result) => {
    //   this.props.history.push('/flights');
    //   console.log(result.target.responseText);
    //   let data = JSON.parse  (result.target.responseText);
    //   console.log(data.trips.tripOption);
    // });
    // oReq.open("GET", "http://localhost:9000/flights/list");
    // oReq.send();
    this.props.onSearchFlights(form.origin.value, form.destination.value, form.adultCount.value, form.date.value);
    this.props.history.push('/flights');
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>FLIGHTS FORM PAGE</h1>
        <form onSubmit={ this.submitHandler }>
          <input className='flight-form' type='text' placeholder='origin' autoComplete='off' name='origin' />
          <br/>
          <input className='flight-form' type='text' placeholder='destination' autoComplete='off' name='destination' />
          <br/>
          adultCount:
          <br/>
          <input className='flight-form' type='number' min='1' name='adultCount' />
          <br/>
          date:
          <br/>
          <input className='flight-form' type='date' min={ new Date() } name='date' />
          <br/>
          <input  type='submit' value='Search Flights' />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    flights: state.flights,
    hotels: state.hotels
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchFlights: (origin, destination, adultCount, date) => {
      dispatch(searchFlights(origin, destination, adultCount, date))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightsForm);
