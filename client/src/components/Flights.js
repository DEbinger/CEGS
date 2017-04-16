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
    	<div>
      	<h1>FLIGHTS PAGE</h1>
      	<form>
      		<input type="text" value="origin" placeholder="Origin" />
      		<br />
      		<input type="text" value="destination" placeholder="Destination" />
      		<br />
      		<input type="date" value="date"/>
      		<br />
      		<label>
	      		Adult(s):
	      			<input type="number" value="adultCount" />
      		</label>
      		<br />
      		<label>
	      		Infant(s) in Lap:
	      			<input type="number" value="infantInLapCount" />
	      		</label>
	     		<br />
      		<label>
	      		Infant(s) in Seat:
	      			<input type="number" value="infantInSeatCount" />
      		</label>
	     		<br />
	     		<label>
	     			Child:
	     				<input type="number" value="childCount" />
	     		</label>
	     		<br />
      		<label>
	      		Senior(s):
	      			<input type="number" value="seniorCount" />
      		</label>
					<br />
					<label>
						<input type="checkbox" value="refundable" />
						Refundable
					</label>
					<br />
					<input type="submit" value="Search Flights" />
      	</form>
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