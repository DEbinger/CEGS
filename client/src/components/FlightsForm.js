import React, { Component } from 'react';
import {
  searchFlights,
  listFlights,
  clearFlights,
  errorMsg,
  carrierCodes
} from '../redux/actions/flightsAction';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

class FlightsForm extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    let form = document.getElementsByClassName('flight-form');
    let searchValues = `origin=${form.origin.value}&destination=${form.destination.value}&adultCount=${form.adultCount.value}&childCount=${form.childCount.value}&infantInLapCount=${form.infantInLapCount.value}&infantInSeatCount=${form.infantInSeatCount.value}&seniorCount=${form.seniorCount.value}&tripType=${form.tripType.value}&departureDate=${form.departureDate.value}&returnDepartureDate=${form.returnDepartureDate.value}&refundable=${form.refundable.value}`;
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", (result) => {
      this.props.onSearchFlights(form.origin.value, form.destination.value, form.adultCount.value, form.childCount.value, form.infantInLapCount.value, form.infantInSeatCount.value, form.seniorCount.value,form.tripType.value, form.departureDate.value, form.returnDepartureDate.value, form.refundable.value);
      let data = JSON.parse(result.target.responseText);
      console.log(data);

      this.props.onClearState();
      if (!data.trips.hasOwnProperty('tripOption')) {
        this.props.onErrorMsg('Not enough seats available');
      } else {

        let carrierData = data.trips.data.carrier;

        let codeObj = {};

        carrierData.forEach( carrier => Object.assign(codeObj, {
          [carrier.code]: carrier.name
        }));

        this.props.onCarrierCodes(codeObj);

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
    });

    oReq.open("POST", "/flights/list");
    oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    oReq.send(searchValues);
  }

  render() {
    console.log(this.props.onListFlights);
    return (
      <div className="componentWithSidebar">
        <Sidebar />
        <div id="flightForm" className="flight">
          <h1>Find a Flight</h1>
          <form onSubmit={ this.submitHandler }>
            <label htmlFor="tripType" > Trip Type </label>
              <br />
              <select id="tripType" className='flight-form' name='tripType'>
                <option value='oneWay'>One Way</option>
                <option value='roundTrip'>Round Trip</option>
              </select>
            <br/>
            <ul className="location">
              <li>
                <label htmlFor="origin"> From </label>
                <br />
                <input id="origin" className='flight-form' type='text' placeholder='Airport' autoComplete='off' name='origin' autoFocus/>
              </li>
              <li>
                <label htmlFor="destination" > To </label>
                  <br />
                  <input id="destination" className='flight-form' type='text' placeholder='Airport' autoComplete='off' name='destination' />
              </li>
            </ul>
            <br/>
            <ul className="dates">
              <li>
              <label htmlFor="departureDate" > Depart </label>
                <br />
                <input id="departureDate" className='flight-form' type='date' min={ new Date() } name='departureDate' />
              </li>
              <li>
                <label htmlFor="returnDepartureDate" > Return </label>
                <br />
                <input id="returnDepartureDate" className='flight-form' type='date' name='returnDepartureDate' />
              </li>
            </ul>
            <br />
            <ul id="peopleCount">
              <li>
                <label htmlFor="adultCount" > Adult </label>
                <br/>
                <select id="adultCount" className='flight-form' name='adultCount'>
                  <option value='0'>0</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </li>
              <li>
                <label htmlFor="seniorCount" > Senior </label>
                <br/>
                <select id="seniorCount" className='flight-form' name='seniorCount'>
                  <option value='0'>0</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </li>
              <li>
                <label htmlFor="childCount" > Children </label>
                <br/>
                <select id="childCount" className='flight-form' name='childCount'>
                  <option value='0'>0</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </li>
              <li>
              <label htmlFor="infantInLapCount" > Infant In Lap </label>
              <br/>
              <select id="infantInLapCount" className='flight-form' name='infantInLapCount'>
                <option value='0'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
              </li>
              <li>
                <label htmlFor="infantInSeatCount" > Infant In Seat </label>
                <br/>
                <select id="infantInSeatCount" className='flight-form' name='infantInSeatCount'>
                  <option value='0'>0</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </li>
            </ul>
            <br/>
            <label htmlFor="refundable" > Refundable </label>
              <br />
              <select id="refundable" className='flight-form' name='refundable'>
                <option value='false'>No</option>
                <option value='true'>Yes</option>
              </select>
            <br/>
            <button className="submitBtn" type='submit'>Search Flights</button>
          </form>
          <p className="errorMsg">{ this.props.flights.errorMsg }</p>
        </div>
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
    onSearchFlights: (origin, destination, adultCount, childCount, infantInLapCount, infantInSeatCount, seniorCount,tripType, departureDate, returnDepartureDate, refundable) => {
      dispatch(searchFlights(origin, destination, adultCount, childCount, infantInLapCount, infantInSeatCount, seniorCount,tripType, departureDate, returnDepartureDate, refundable))
    },
    onListFlights: (id, saleTotal, slice, pricing) => {
      dispatch(listFlights(id, saleTotal, slice, pricing))
    },
    onClearState: () => {
      dispatch(clearFlights())
    },
    onErrorMsg: (errorMessage) => {
      dispatch(errorMsg(errorMessage))
    },
    onCarrierCodes: (names) => {
      dispatch(carrierCodes(names))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightsForm);
