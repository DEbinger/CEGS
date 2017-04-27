import React, { Component } from 'react';
import {
  searchFlights,
  listFlights,
  clearState,
  errorMsg,
  carrierCodes
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
      let data = JSON.parse(result.target.responseText);
      console.log(data);

      this.props.onClearState();
      if (!data.trips.hasOwnProperty('tripOption')) {
        this.props.onErrorMsg('Not enough seats available');
      } else {

        console.log(data);
        let carrierData = data.trips.data.carrier;

        carrierData.forEach( carrier => {
          this.props.onCarrierCodes(carrier.code, carrier.name);
        });

        let flightsArr = data.trips.tripOption;
        flightsArr.forEach( flight => {
          this.props.onListFlights(
            flight.id,
            flight.saleTotal,
            flight.slice,
            flight.pricing[0]
          );
        });

        this.props.history.push('/flights');
      }

      // console.log('THIS', JSON.parse(result.target.responseText));
      // console.log('REQ RESULT', JSON.parse(result.target.responseText).trips.tripOption);
    });

    oReq.open("POST", "/flights/list");
    oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    oReq.send(searchValues);
  }



  render() {
    // console.log('FLIGHTS FORM PAGE', this.props);
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
        <p>{ this.props.flights.errorMsg }</p>
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
    onListFlights: (id, saleTotal, slice, pricing) => {
      dispatch(listFlights(id, saleTotal, slice, pricing))
    },
    onClearState: () => {
      dispatch(clearState())
    },
    onErrorMsg: (errorMessage) => {
      dispatch(errorMsg(errorMessage))
    },
    onCarrierCodes: (code, name) => {
      dispatch(carrierCodes(code, name))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightsForm);
