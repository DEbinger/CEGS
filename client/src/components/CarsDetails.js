import React, { Component } from 'react';
import { listCars, carDetails, addCar, clearCars, searchCars, carItinerary } from '../redux/actions/carsAction';
import { connect } from 'react-redux';

class CarsDetails extends Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.props.onCarItinerary(this.props.cars.search_cars.pick_up, this.props.cars.search_cars.drop_off, this.props.cars.car_details.airport, this.props.cars.car_details.company_name, this.props.cars.car_details.vehicle_type, this.props.cars.car_details.amount);
    this.props.history.push("/itinerary");
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
        <button onClick={this.handleAdd}>Add Car</button>
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
    onAddCar: (pick_up, drop_off, airport, company_name, vehicle_type, amount) => {
      dispatch(addCar(pick_up, drop_off, airport, company_name, vehicle_type, amount));
    },
    onClearCars: () => {
      dispatch(clearCars());
    },
    onSearchCars: (location, pick_up, drop_off) => {
      dispatch(searchCars(location, pick_up, drop_off));
    },
    onCarItinerary: (pick_up, drop_off, airport, company_name, vehicle_type, amount) => {
      dispatch(carItinerary(pick_up, drop_off, airport, company_name, vehicle_type, amount));
    } 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarsDetails);