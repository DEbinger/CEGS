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
import Profile from './components/Profile';
import CarsForm from './components/CarsForm';
import FlightsForm from './components/FlightsForm';
import Flights from './components/Flights';
import HotelsForm from './components/HotelsForm';
import Itinerary from './components/Itinerary';

//REDUX STUFF
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
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

console.log('store', store);

ReactDOM.render(
  <Provider store={ store } history={ history }>
    <Router>
      <div>
        <Nav />
        <Sidebar />
        <Route exact path='/' component={ App } />
        <Route path='/signin' component={ SignIn } />
        <Route path='/signup' component={ SignUp } />
        <Route path='/resetpassword' component={ ResetPassword } />
        <Route path='/profile' component={ Profile } />
        <Route path='/flightsform' component={ FlightsForm } />
        <Route path='/flights' component={ Flights } />
        <Route path='/hotelsform' component={ HotelsForm } />
        <Route path='/carsform' component={ CarsForm } />
        <Route path='/itinerary' component={ Itinerary } />
      </div>
    </Router>
  </Provider>,

  document.getElementById('root')
);
