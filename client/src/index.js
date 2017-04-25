import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

//COMPONENTS
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import CarsDetails from './components/CarsDetails';
import CarsForm from './components/CarsForm';
import Cars from './components/Cars';
import Flights from './components/Flights.js';
import Hotels from './components/Hotels';
import Itinerary from './components/Itinerary';

//REDUX STUFF
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

//REDUCERS
import cars from './redux/reducers/carsReducer';

import createHistory from 'history/createBrowserHistory';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const history = createHistory();

const allReducers = combineReducers({
  cars
});

let store = createStore(allReducers);

ReactDOM.render(
  <Provider store={ store } history={ history }>
    <Router>
      <div>
        <Nav />
        <Sidebar />
        <Route exact path='/' component={ App } />
        <Route path='/signin' component={ SignIn } />
        <Route path='/signup' component={ SignUp } />
        <Route path='/resetpassword' component={ResetPassword} />
        <Route path='/flights' component={ Flights } />
        <Route path='/hotels' component={ Hotels } />
        <Route path='/carsdetails' component={ CarsDetails } />
        <Route path='/carsform' component={ CarsForm } />
        <Route path='/cars' component={ Cars } />
        <Route path='/itinerary' component={ Itinerary } />
      </div>
    </Router>
  </Provider>,

  document.getElementById('root')
);