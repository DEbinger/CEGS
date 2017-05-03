import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listCars, carDetails, addCar, clearCars } from '../redux/actions/carsAction';
import Sidebar from '../components/Sidebar';

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
      this.props.onClearCars();
      let cars = JSON.parse(results.target.responseText);
      cars.results.forEach(cars => {
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
      <div className="componentWithSidebar">
        <Sidebar />
        <div id="carForm" className="car">
          <h1>Find a Car</h1>
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
            <input type="submit" value="Search Cars" />
          </form>
        </div>
      </div>
    )
  }
}

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
      onCarDetails: (company_name, airport, city, amount, vehicle_type, category, transmission, fuel) => {
        dispatch(carDetails(company_name, airport, city, amount, vehicle_type, category, transmission, fuel));
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