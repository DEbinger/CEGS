import React, { Component } from 'react';
import { listCars, carDetails, addCar, clearCars } from '../redux/actions/carsAction';
import { connect } from 'react-redux';

class Cars extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>CARS PAGE</h1>
        {this.props.cars.cars.map( ({company_name, airport, city, cars}) =>
          <Dealer company_name={company_name} airport={airport} city={city} cars={cars} onCarDetails={this.props.onCarDetails} history={this.props.history} />
        )}
      </div>
    );
  }
}

class Dealer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Company: {this.props.company_name}</h3>
        <h3>Airport: {this.props.airport}</h3>
        <h3>City: {this.props.city}</h3>
        {this.props.cars.map( ({estimated_total, vehicle_info}) => 
          <Info amount={estimated_total.amount} vehicle_type={vehicle_info.type} company_name={this.props.company_name} airport={this.props.airport} city={this.props.city} category={vehicle_info.category} transmission={vehicle_info.transmission} fuel={vehicle_info.fuel} onCarDetails={this.props.onCarDetails} history={this.props.history} />
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
    this.props.onCarDetails(this.props.company_name, this.props.airport, this.props.city, this.props.amount, this.props.vehicle_type, this.props.category, this.props.transmission, this.props.fuel);
    this.props.history.push("/itinerary");
  }

  render() {
    return (
      <div>
        <p>Amount: ${this.props.amount}</p>
        <p>Vehicle: {this.props.vehicle_type}</p>
        <button onClick={this.handleDetails}>Details</button>
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
)(Cars);