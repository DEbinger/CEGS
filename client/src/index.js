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
import Cars from './components/Cars';
import Flights from './components/Flights';
import Hotels from './components/Hotels';
import Itinerary from './components/Itinerary';

//REDUX STUFF

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

ReactDOM.render(
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
      <Route path='/cars' component={ Cars } />
      <Route path='/itinerary' component={ Itinerary } />
    </div>
  </Router>,

  document.getElementById('root')
);
