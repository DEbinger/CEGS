import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { browserHistory } from 'react-router';
import './index.css';

//COMPONENTS
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import CarsForm from './components/CarsForm';
import FlightsForm from './components/FlightsForm';
import Flights from './components/Flights';
import HotelsForm from './components/HotelsForm';
import Itinerary from './components/Itinerary';
import Globe from './components/Globe';

//REDUX STUFF
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer, syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';

//REDUCERS
import users from './redux/reducers/usersReducer';
import cars from './redux/reducers/carsReducer';
import hotels from './redux/reducers/hotelsReducer';
import flights from './redux/reducers/flightsReducer';
import authWrapperUserReducer from './redux/reducers/authWrapperUserReducer';

import createHistory from 'history/createBrowserHistory';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

const history = createHistory();

const allReducers = combineReducers({
  users,
  user: authWrapperUserReducer,
  cars,
  hotels,
  flights
});

const routingMiddleware = routerMiddleware(browserHistory);

let store = createStore(allReducers,
  applyMiddleware(routingMiddleware));


const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user, // how to get the user state
  redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
});


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
