import React, { Component } from 'react';
import { listCars, addCar, clearCars } from '../redux/actions/carsAction';
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
          <Dealer company_name={company_name} airport={airport} city={city} cars={cars} />
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
          <Info amount={estimated_total.amount} type={vehicle_info.type} />
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

  handleDetails(event) {
    event.preventDefault();
    console.log('detail button clicked');
    this.props.history.push("/details");
  }

  handleAdd(event) {
    event.preventDefault();
    console.log('add button clicked');
    this.props.history.push("/itinerary");
  }

  render() {
    console.log('props', this.props)
    return (
      <div>
        <p>Amount: ${this.props.amount}</p>
        <p>Vehicle: {this.props.type}</p>
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