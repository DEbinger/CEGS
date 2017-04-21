import React, { Component } from 'react';
import {
  searchFlights,
  listFlights
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
      let searchValues = `origin=${form.origin.value}&destination=${form.destination.value}&adultCount=${form.adultCount.value}&tripType=${form.tripType.value}&departureDate=${form.departureDate.value}&returnDepartureDate=${form.returnDepartureDate.value}`;
      console.log(searchValues);
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", (result) => {
      this.props.onSearchFlights(form.origin.value, form.destination.value, form.adultCount.value, form.tripType.value, form.departureDate.value, form.returnDepartureDate.value);

      let flightsArr = JSON.parse(result.target.responseText).trips.tripOption;
      // console.log('REQ RESULT', JSON.parse(result.target.responseText).trips.tripOption);
      flightsArr.forEach( flight => {
        this.props.onListFlights(
          flight.id,
          flight.saleTotal,
          flight.slice
        );
      });


      this.props.history.push('/flights');
    });

    oReq.open("POST", "/flights/list");
    oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    oReq.send(searchValues);
  }



  render() {
    console.log('FLIGHTS FORM PAGE', this.props);
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
          <select className='flight-form' name='tripType'>
            <option value='oneWay'>one way</option>
            <option value='roundTrip'>round trip</option>
          </select>
          departure date:
          <br/>
          <input className='flight-form' type='date' min={ new Date() } name='departureDate' />
          <br/>
          return date:
          <br/>
          <input className='flight-form' type='date' name='returnDepartureDate' />
          <br/>
          <input  type='submit' value='Search Flights' />
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    flights: state.flights
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchFlights: (origin, destination, adultCount, tripType, departureDate, returnDepartureDate) => {
      dispatch(searchFlights(origin, destination, adultCount, tripType, departureDate, returnDepartureDate))
    },
    onListFlights: (id, saleTotal, slice) => {
      dispatch(listFlights(id, saleTotal, slice))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightsForm);
