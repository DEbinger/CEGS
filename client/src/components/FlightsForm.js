import React, { Component } from 'react';

class FlightsForm extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event, redirect = this.redirect) {
    event.preventDefault();
    // let form = document.getElementsByClassName('flight-form');
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", () => {
      this.props.history.push('/cars');
    });
    oReq.open("GET", "http://localhost:9000/flights/list");
    oReq.send();
  }

  render() {
    return (
      <div>
        <h1>FLIGHTS FORM PAGE</h1>
        <form onSubmit={ this.submitHandler }>
          <input className='flight-form' type='text' placeholder='origin' autoComplete='off' name='origin' />
          <br/>
          <input className='flight-form' type='text' placeholder='destination' autoComplete='off' name='destination' />
          <br/>
          adultCount:
          <br/>
          <input className='flight-form' type='number' min='1' name='adultCount' />
          <br/>
          date:
          <br/>
          <input className='flight-form' type='date' min={ new Date() } name='date' />
          <br/>
          <input  type='submit' value='Search Flights' />
        </form>
      </div>
    );
  }
}

export default FlightsForm;