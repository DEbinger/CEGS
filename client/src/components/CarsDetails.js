import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listCars, carDetails, addCar, clearCars } from '../redux/actions/carsAction';
import Sidebar from '../components/Sidebar';

class CarsDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="componentWithSidebar">
        <Sidebar />
        <div id="carDetail" className="car">
          <h1>Company Name: {this.props.cars.car_details.company_name}</h1>
          <p>Airport: {this.props.cars.car_details.airport}, {this.props.cars.car_details.city}</p>
          <ul>Vehicle:
            <li>{this.props.cars.car_details.category}</li>
            <li>Vehicle Type: {this.props.cars.car_details.vehicle_type}</li>
            <li>Transmission: {this.props.cars.car_details.transmission}</li>
            <li>Fuel: {this.props.cars.car_details.fuel}</li>
          </ul>
          <p>Weekly Rate: ${this.props.cars.car_details.amount}</p>
        </div>
      </div>
    );
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarsDetails);