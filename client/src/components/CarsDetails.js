import React, { Component } from 'react';
import { listCars, addCar, clearCars } from '../redux/actions/carsAction';
import { connect } from 'react-redux';

class CarsDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>CARS DETAILS</h1>
        {this.props.cars.map( ({estimated_total, vehicle_info}) => 
          <MoreInfo amount={estimated_total.amount} type={vehicle_info.type} />
        )}
      </div>
    );
  }
}

class MoreInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Vehicle Category: {this.props.category}</p>
        <p>Vehicle Type: {this.props.type}</p>
        <p>Transmission: {this.props.transmission}</p>
        <p>Weekly Price: ${this.props.amount}</p>
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