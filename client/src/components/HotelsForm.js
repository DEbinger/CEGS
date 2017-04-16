import React, { Component } from 'react';

class HotelsForm extends Component {
  constructor() {
    super();
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    let form = document.getElementsByClassName('hotels-form');
    console.log('Location:', form.location.value);
    console.log('Check In:', form.checkIn.value);
    console.log('Check Out:', form.checkOut.value);
    const values = `location=${form.location.value}&check_in=${form.checkIn.value}&check_out=${form.checkOut.value}`;
    console.log('values', values);
    let oReq = new XMLHttpRequest();
    oReq.addEventListener('load', (results) => {
      console.log(results.target.responseText);
    });
    oReq.open('POST', 'http://localhost:9000/hotels/list', true);
    oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    oReq.send(values);

  }

  render() {
    return (
    	<div>
      	<h1>HOTELS FORM PAGE</h1>
				<form onSubmit={ this.submitHandler }>
					<input className="hotels-form" type="text" placeholder="Location" autoComplete='off' name="location" />
					<br />
					<label>
						Check In:
						<input className="hotels-form" type="date" name="checkIn" />
					</label>
					<br />
					<label>
						Check Out:
						<input className="hotels-form" type="date" name="checkOut" />
					</label>
					<br />
					<input type="submit" value="Search Hotels" />
				</form>
      </div>
    );
  }
}

export default HotelsForm;