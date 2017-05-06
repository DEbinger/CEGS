import React, { Component } from 'react';
import { listCars, carDetails, addCar, clearCars, searchCars, carItinerary } from '../redux/actions/carsAction';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

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
      <div className="componentWithSidebar">
        <Sidebar />
        <div id="carDetail" className="car">
          <h1>Company Name: {this.props.cars.car_details.company_name}</h1>
          <p>Location: {this.props.cars.car_details.airport}, {this.props.cars.car_details.city}</p>
            <ul>
              <li>Vehicle Type: {this.props.cars.car_details.vehicle_type}</li>
              <li>Category: {this.props.cars.car_details.category}</li>
              <li>Transmission: {this.props.cars.car_details.transmission}</li>
              <li>Fuel: {this.props.cars.car_details.fuel}</li>
            </ul>
          <p>Weekly Rate: ${this.props.cars.car_details.amount}</p>
          <button id="carDetailAddButton" className="submitBtn" onClick={this.handleAdd}>Add Car</button>
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