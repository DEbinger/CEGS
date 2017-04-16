import React, { Component } from 'react';
import { connect } from 'react-redux';

class Flights extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('in flights component');
    console.log(this.props);
    return (
      <div className='flights-list-container'>
        <h1>Flights List Page</h1>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    flights: state.flights,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onFlightsSearch: (origin, destination, date, adultCount, infantInLapCount, infantInSeatCount, childCount, seniorCount, refundable, user) => {
    //   dispatch(listFlights(origin, destination, date, adultCount, infantInLapCount, infantInSeatCount, childCount, seniorCount, refundable, user))
    // }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Flights);