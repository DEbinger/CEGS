// jshint esversion:6

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import '../public/css/app.css';
import './index.css';

//COMPONENTS
// import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import ResetPassword from './components/ResetPassword';
import Cars from './components/Cars';
import CarsForm from './components/CarsForm';
import CarsDetails from './components/CarsDetails';
import Flights from './components/Flights.js';
import FlightDetails from './components/FlightDetails.js';
import FlightsForm from './components/FlightsForm';
import HotelsForm from './components/HotelsForm';
import Hotels from './components/Hotels';
import HotelDetail from './components/HotelDetail';
import Itinerary from './components/Itinerary';
import Globe from './components/Globe';

//REDUX STUFF
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as ReduxDevTools from 'redux-devtools';

//REDUCERS
import users from './redux/reducers/usersReducer';
import cars from './redux/reducers/carsReducer';
import hotels from './redux/reducers/hotelsReducer';
import flights from './redux/reducers/flightsReducer';

import createHistory from 'history/createBrowserHistory';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

const history = createHistory();

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const allReducers = combineReducers({
  users,
  cars,
  hotels,
  flights
});

let store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk)
);

// console.log('store', store);

ReactDOM.render(
  <Provider store={ store } history={ history }>
    <Router>
      <div>
        <Nav />
        <Route exact path='/' component={ App } />
        <Route path='/signin' component={ SignIn } />
        <Route path='/signup' component={ SignUp } />
        <Route path='/resetpassword' component={ ResetPassword } />
        <Route path='/profile' component={ Profile } />
        <Route path='/flights' component={ Flights } />
        <Route path='/flightdetails' component={ FlightDetails } />
        <Route path='/flightsform' component={ FlightsForm } />
        <Route path='/hotels' component={ Hotels } />
        <Route path='/hotelsform' component={ HotelsForm } />
        <Route path='/hoteldetail' component={ HotelDetail } />
        <Route path='/cars' component={ Cars } />
        <Route path='/carsform' component={ CarsForm } />
        <Route path='/carsdetails' component={ CarsDetails } />
        <Route path='/itinerary' component={ Itinerary } />
      </div>
    </Router>
  </Provider>,

  document.getElementById('root')
);
