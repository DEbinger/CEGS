import React, { Component } from 'react';
import { listCars, carDetails, addCar, clearCars } from '../redux/actions/carsAction';
import { connect } from 'react-redux';

class CarsDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Company Name: {this.props.cars.car_details.company_name}</p>
        <p>Airport: {this.props.cars.car_details.airport}</p>
        <p>City: {this.props.cars.car_details.city}</p>
        <p>Vehicle Category: {this.props.cars.car_details.category}</p>
        <p>Vehicle Type: {this.props.cars.car_details.vehicle_type}</p>
        <p>Transmission: {this.props.cars.car_details.transmission}</p>
        <p>Weekly Price: ${this.props.cars.car_details.amount}</p>
        <p>Fuel: {this.props.cars.car_details.fuel}</p>
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
    onAddCar: (pick_up, drop_off, airport, company_name, vehicle_type, amount, itinerary, user) => {
      dispatch(addCar(pick_up, drop_off, airport, company_name, vehicle_type, amount, itinerary, user));
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