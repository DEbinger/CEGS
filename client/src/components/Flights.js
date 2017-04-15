import React, { Component } from 'react';

class Flights extends Component {
  render() {
    return (
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

export default Flights;