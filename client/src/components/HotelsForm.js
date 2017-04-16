import React, { Component } from 'react';

class Hotels extends Component {
  render() {
    return (
    	<div>
      	<h1>HOTELS PAGE</h1>
				<form>
					<input type="text" value="location" placeholder="Location" />
					<br />
					<label>
						Check In:
						<input type="date" value="check_in" />
					</label>
					<br />
					<label>
						Check Out:
						<input type="date" value="check_out" />
					</label>
					<br />
					<label>
						Amenities:
							<br />
							<label>
								<input type="checkbox" value="amenity" />
							Wifi
							</label>
							<br />
							<label>
								<input type="checkbox" value="amenity" />
							Air Conditioning
							</label>
							<br />
							<label>
								<input type="checkbox" value="amenity" />
							Parking
							</label>
							<br />
							<label>
								<input type="checkbox" value="amenity" />
							Valet
							</label>
							<br />
							<label>
								<input type="checkbox" value="amenity" />
							Pool
							</label>
							<br />
							<label>
								<input type="checkbox" value="amenity" />
							Business Center
							</label>
							<br />
							<label>
								<input type="checkbox" value="amenity" />
							Spa
							</label>
					</label>
					<br />
					<input type="submit" value="Search Hotels" />
				</form>
      </div>
    );
  }
}

export default Hotels;