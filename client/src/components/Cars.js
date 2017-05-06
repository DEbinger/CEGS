import React, { Component } from 'react';
import { listCars, carDetails, addCar, clearCars, searchCars, carItinerary } from '../redux/actions/carsAction';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

class Cars extends Component {

  render() {
    return (
      <div className="componentWithSidebar">
          <Sidebar />
          <div id="carList1" className="car">
          <h1>Car Results</h1>
          {this.props.cars.cars.map( ({company_name, airport, city, cars}) =>
          <Dealer company_name={company_name} airport={airport} city={city} cars={cars} search_cars={this.props.cars.search_cars} car_details={this.props.cars.car_details} onCarDetails={this.props.onCarDetails} onCarItinerary={this.props.onCarItinerary} history={this.props.history} />
        )}
        </div>
      </div>
    );
  }
}

class Dealer extends Component {
  render() {
    return (
      <div id="carList2" className="car">
        <ul>
          <li>Company: {this.props.company_name}</li>
          <li>Location: {this.props.city}, {this.props.airport}, </li>
        </ul>
        {this.props.cars.map( ({estimated_total, vehicle_info}) => 
          <Info amount={estimated_total.amount} vehicle_type={vehicle_info.type} company_name={this.props.company_name} airport={this.props.airport} city={this.props.city} category={vehicle_info.category} transmission={vehicle_info.transmission} fuel={vehicle_info.fuel} search_cars={this.props.search_cars} car_details={this.props.car_details} onCarDetails={this.props.onCarDetails} onCarItinerary={this.props.onCarItinerary} history={this.props.history} />
        )}
      </div>
    );
  }
}

class Info extends Component {
  constructor(props) {
    super(props);

    this.handleDetails = this.handleDetails.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleDetails() {
    this.props.onCarDetails(this.props.company_name, this.props.airport, this.props.city, this.props.amount, this.props.vehicle_type, this.props.category, this.props.transmission, this.props.fuel);
    this.props.history.push("/carsdetails");
  }

  handleAdd() {
    this.props.onCarItinerary(this.props.search_cars.pick_up, this.props.search_cars.drop_off, this.props.airport, this.props.company_name, this.props.vehicle_type, this.props.amount);
    this.props.history.push("/itinerary");
  }

  render() {
    return (
      <div id="carList3" className="car">
        <ul>
          <li>Amount: ${this.props.amount}</li>
          <li>Vehicle: {this.props.vehicle_type}</li>
        </ul>
        <span>
          <button id="carDetailButton" onClick={this.handleDetails}>Details</button>
          <button id="carAddButton" onClick={this.handleAdd}>Add Car</button>
        </span>
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
)(Cars);