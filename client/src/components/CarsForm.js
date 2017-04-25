import React, { Component } from 'react';

class Cars extends Component {
  render() {
    return (
    	<div>
      	<h1>CARS PAGE</h1>
				<form>
					<input type="text" value="location" placeholder="Location" />
					<br />
					<label>
					Pick Up:
						<input type="date" value="pick_up" />
					</label>
					<br />
					<label>
					Drop Off:
						<input type="date" value="drop_off" />
					</label>
					<br />
					<label>
					Vehicle:
						<input type="text" value="vehicle" placeholder="Vehicle" />
					</label>
					<br />
					<input type="submit" value="Search Cars" />
				</form>
    	</div>
    );
  }
}

export default Cars;