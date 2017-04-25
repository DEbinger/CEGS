import React, { Component } from 'react';
import { listCars, addCar, clearCars } from '../redux/actions/carsAction';
import { connect } from 'react-redux';

class CarsForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let form = document.getElementsByClassName('cars-form');
    
    const values = `location=${form.location.value}&pick_up=${form.pick_up.value}&drop_off=${form.drop_off.value}`;
    
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", (results) => {
      let cars = JSON.parse(results.target.responseText);
      cars.results.forEach(cars => {
        console.log('cars', cars)
        this.props.onListCars(
          cars.provider.company_name,
          cars.airport,
          cars.address.city,
          cars.cars
        );
      });
      this.props.history.push("/cars");      
    });
    oReq.open("POST", "/cars/list");
    oReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    oReq.send(values);
  }

  render() {
    return (
      <div>
        <h1>CARS FORM PAGE</h1>
        <div>
        <form onSubmit={this.handleSubmit}>
          <input className="cars-form" name="location" type="text" placeholder="Location" />
          <br />
          <label>
          Pick Up: 
            <input className="cars-form" name="pick_up" type="date" />
          </label>
          <br />
          <label>
          Drop Off:
            <input className="cars-form" name="drop_off" type="date" />
          </label>
          <br />
          <label htmlFor="vehicle">
          Vehicle:
            <select id="vehicle">
              <option value="ACAR">Any Standard Vehicle</option>
              <option value="ALLC">Two or Four Door</option>
              <option value="APUP">Any Pickup</option>
              <option value="ASUV">Any SUV</option>
              <option value="AVAN">Any Passenger Van</option>
              <option value="ALMO">Limousine</option>
              <option value="ASPT">Sport</option>
              <option value="ACNV">Convertible</option>
              <option value="AHYB">All Hybrid Vehicles</option>
              <option value="AELC">All Electric Powered Vehicles</option>
            </select>
          </label>
          <br />
          <input type="submit" value="Search Cars" />
        </form>
        </div>
      </div>

const mapStateToProps = (state) => {
  return {
    cars: state.cars
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onListCars: (company_name, airport, city, cars) => {
      dispatch(listCars(company_name, airport, city, cars));
    },
    onAddCar: (company_name, airport, city, cars) => {
      dispatch(addCar(company_name, airport, city, cars));
    },
    onClearCars: () => {
      dispatch(clearCars());
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarsForm);