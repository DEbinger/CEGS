import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  flightDetails,
  flightItinerary
} from '../redux/actions/flightsAction';
import Sidebar from '../components/Sidebar';

class Flights extends Component {
  render() {
    return (
      <div className="componentWithSidebar">
        <Sidebar />
        <div id="flightList1" className="flight">
          <h1>FLIGHTS LIST PAGE</h1>

          {this.props.flights.flights.map( ({ id, saleTotal, slice, pricing }) => <FlightContainer key={ id } id={ id } saleTotal={ saleTotal } slice={ slice } pricing={ pricing } carrierObj={ this.props.flights.carrierCodes } onFlightDetails={ this.props.onFlightDetails } history={ this.props.history } onAddToItinerary={ this.props.onAddToItinerary } searchValues={ this.props.searchValues } /> ) }
        </div>
      </div>
    );
  }
}

class FlightContainer extends Component {
  constructor(props) {
    super(props);

    this.detailsHandler = this.detailsHandler.bind(this);
    this.addFlightHandler = this.addFlightHandler.bind(this);
  }

  detailsHandler() {
    this.props.onFlightDetails(this.props.pricing, this.props.saleTotal, this.props.slice);
    this.props.history.push('/flightdetails');
  }

  addFlightHandler(event) {
    event.preventDefault();
    let {
      origin,
      destination,
      departureDate,
      returnDepartureDate
    } = this.props.searchValues;
    this.props.onAddToItinerary(this.props.saleTotal, departureDate, returnDepartureDate, origin, destination);
    this.props.history.push('/itinerary');
  }

  render() {
    return (
      <div id="flightList2" className="flight">
        <p className="price" >{ this.props.saleTotal }</p>
        { this.props.slice.map( ({ duration, segment}) =>
          <SliceDiv key={ duration } segment={ segment } carrierObj={ this.props.carrierObj } />
        )}
        <button onClick={ this.detailsHandler }>Details</button>
        <button onClick={ this.addFlightHandler }>Add Flight</button>
      </div>
    );
  }
}

const SliceDiv = ( { id, segment, carrierObj } ) => (
  <div className='slice-div'>
    { segment.map( ({ id, cabin, leg, flight }) => (
      <SegmentDiv key={ id } cabin={ cabin } leg={ leg } carrier={ flight.carrier } carrierObj={ carrierObj } />
      )
    ) }
  </div>
);

const SegmentDiv = ( { id, cabin, leg, carrier, carrierObj } ) => (
  <div>
    <p>Cabin: { cabin }</p>
    <p>{ leg[0].origin} => { leg[0].destination }</p>
    <p>Airlines: { carrierObj[carrier] }</p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    flights: state.flights,
    searchValues: state.flights.searchValues
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFlightDetails: (pricing, saleTotal, slice) => {
      dispatch(flightDetails(pricing, saleTotal, slice))
    },
    onAddToItinerary: (saleTotal, departureDate, returnDepartureDate, origin, destination) => {
      dispatch(flightItinerary(saleTotal, departureDate, returnDepartureDate, origin, destination))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Flights);