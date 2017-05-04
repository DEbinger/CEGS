import React, { Component } from 'react';
import { connect } from 'react-redux';
import { flightItinerary } from '../redux/actions/flightsAction';
import Sidebar from '../components/Sidebar';

class FlightDetails extends Component {
  constructor(props) {
    super(props);

    this.addFlightHandler = this.addFlightHandler.bind(this);
  }

  addFlightHandler(event) {
    event.preventDefault();
    let {
      origin,
      destination,
      departureDate,
      returnDepartureDate
    } = this.props.searchValues;
    let {
      saleTotal
    } = this.props.flightDetails;
    this.props.onAddToItinerary(saleTotal, departureDate, returnDepartureDate, origin, destination);
    this.props.history.push('/itinerary');
  }

  render() {
    console.log('FROM FLIGHTS DETAILS',this.props);
    return (
      <div className="componentWithSidebar">
        <Sidebar />
        <div id="flightDetail" className="flight">
          <h1>Flight Details</h1>

         
          { this.props.flightDetails.slice.map( ({ duration, segment }) =>
            <SliceDiv key={ duration } segment={ segment } carrierObj={ this.props.carrierCodes } />
          ) }
          <ul>
            <li>Latest Ticketing Time: { this.props.flightDetails.pricing.latestTicketingTime }</li>
            <li>Price per ticket: { this.props.flightDetails.pricing.saleTotal }</li>
            <li>Sale Total: { this.props.flightDetails.saleTotal }</li>
            <li>Refundable: { `${this.props.flightDetails.pricing.refundable}` }</li>
          </ul>
          <button onClick={ this.addFlightHandler }>Add Flight</button>
        </div>
      </div>
    );
  }
}

const SliceDiv = ( { segment, carrierObj } ) => (
  <div>
    { segment.map( ({ id, cabin, leg, flight }) => (
        <SegmentDiv key={ id } cabin={ cabin } leg={ leg } carrier={ flight.carrier } carrierObj={ carrierObj } />
      )
    ) }
  </div>
);

const SegmentDiv = ( { id, cabin, leg, carrier, carrierObj} ) => (
  <div>
    <p>Cabin: { cabin }</p>
    <p>Airlines: { carrierObj[carrier] }</p>
    <p>{ leg[0].origin } => { leg[0].destination }</p>
    <p>Departure Time: { leg[0].departureTime }</p>
    <p>Arrival Time: { leg[0].arrivalTime }</p>
  </div>
);


const mapStateToProps = (state) => {
  return {
    flightDetails: state.flights.flightDetail,
    carrierCodes: state.flights.carrierCodes,
    searchValues: state.flights.searchValues
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToItinerary: (saleTotal, departureDate, returnDepartureDate, origin, destination) => {
      dispatch(flightItinerary(saleTotal, departureDate, returnDepartureDate, origin, destination))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightDetails);

// saleTotal
// departuredate
// returndate
// origin
// destination