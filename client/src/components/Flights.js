import React, { Component } from 'react';
import { connect } from 'react-redux';

class Flights extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('FLIGHTS LIST PAGE', this.props);
    return (
      <div>
        <h1>FLIGHTS LIST PAGE</h1>

        {this.props.flights.flights.map( ({ id, saleTotal, slice }) =>
            <FlightContainer key={ id } id={ id } saleTotal={ saleTotal } slice={ slice } />
          )
        }
      </div>
    );
  }
}

const FlightContainer = ( { id, saleTotal, slice } ) => (
  <div>
    <h3>{ id }</h3>
    <h2>{ saleTotal }</h2>
    { slice.map( ({ duration, segment }) =>
      <SliceDiv key={ duration } segment={ segment } />
    ) }
  </div>
);

const SliceDiv = ( { id, segment } ) => (
  <div className='slice-div'>
    { segment.map( ({ id, cabin, leg }) => (
      <SegmentDiv key={ id } cabin={ cabin } leg={ leg } />
      )
    ) }
  </div>
);

const SegmentDiv = ( { id, cabin, leg } ) => (
  <div>
    <p>{ cabin }</p>
    <p>{ leg[0].origin} to { leg[0].destination }</p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    flights: state.flights
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Flights);