import React, { Component } from 'react';
import { connect } from 'react-redux';

class FlightDetails extends Component {
  render() {
    console.log('FROM FLIGHTS DETAILS',this.props);
    return (
      <div>
        <h1>FLIGHT DETAILS PAGE</h1>

        <h4>Sale Total: { this.props.flightDetails.saleTotal }</h4>
        <h4>Price per ticket: { this.props.flightDetails.pricing.saleTotal }</h4>
        <h4>Latest Ticketing Time: { this.props.flightDetails.pricing.latestTicketingTime }</h4>
        <p>Refundable: { `${this.props.flightDetails.pricing.refundable}` }</p>

        { this.props.flightDetails.slice.map( ({ duration, segment }) =>
          <SliceDiv key={ duration } segment={ segment } carrierObj={ this.props.carrierCodes } />
        ) }
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

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightDetails);