// jshint esversion:6

import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

//COMPONENTS
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import ResetPassword from './components/ResetPassword';
<<<<<<< HEAD
import CarsDetails from './components/CarsDetails';
import CarsForm from './components/CarsForm';
import Cars from './components/Cars';
import Flights from './components/Flights.js';
=======
import CarsForm from './components/CarsForm';
import FlightsForm from './components/FlightsForm';
import Flights from './components/Flights.js';
import HotelsForm from './components/HotelsForm';
>>>>>>> master
import Hotels from './components/Hotels';
import HotelDetail from './components/HotelDetail';
import Itinerary from './components/Itinerary';

//REDUX STUFF
<<<<<<< HEAD
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

//REDUCERS
import cars from './redux/reducers/carsReducer';
=======
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as ReduxDevTools from 'redux-devtools';

//REDUCERS
import users from './redux/reducers/usersReducer';
import cars from './redux/reducers/carsReducer';
import hotels from './redux/reducers/hotelsReducer';
import flights from './redux/reducers/flightsReducer';
>>>>>>> master

import createHistory from 'history/createBrowserHistory';

import {
  BrowserRouter as Router,
<<<<<<< HEAD
  Route
=======
  Route,
  Link,
  Redirect,
  withRouter
>>>>>>> master
} from 'react-router-dom';

const history = createHistory();

<<<<<<< HEAD
const allReducers = combineReducers({
  cars
});

let store = createStore(allReducers);
=======
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const allReducers = combineReducers({
  users,
  cars,
  hotels,
  flights
});

let store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk)
);

console.log('store', store);
>>>>>>> master

ReactDOM.render(
  <Provider store={ store } history={ history }>
    <Router>
      <div>
        <Nav />
        <Sidebar />
        <Route exact path='/' component={ App } />
        <Route path='/signin' component={ SignIn } />
        <Route path='/signup' component={ SignUp } />
<<<<<<< HEAD
        <Route path='/resetpassword' component={ResetPassword} />
        <Route path='/flights' component={ Flights } />
        <Route path='/hotels' component={ Hotels } />
        <Route path='/carsdetails' component={ CarsDetails } />
        <Route path='/carsform' component={ CarsForm } />
        <Route path='/cars' component={ Cars } />
=======
        <Route path='/resetpassword' component={ ResetPassword } />
        <Route path='/profile' component={ Profile } />
        <Route path='/flightsform' component={ FlightsForm } />
        <Route path='/flights' component={ Flights } />
        <Route path='/hotelsform' component={ HotelsForm } />
        <Route path='/hotels' component={ Hotels } />
        <Route path='/hoteldetail' component={ HotelDetail } />
        <Route path='/cars' component={ Cars } />
        <Route path='/carsform' component={ CarsForm } />
>>>>>>> master
        <Route path='/itinerary' component={ Itinerary } />
      </div>
    </Router>
  </Provider>,

  document.getElementById('root')
);