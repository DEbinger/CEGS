import React, { Component } from 'react';
import { connect } from 'react-redux';

class Flights extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (

      <h1>FLIGHTS LIST PAGE</h1>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    flights: state.flights
  }
};

export default connect(
  mapStateToProps
)(Flights);
