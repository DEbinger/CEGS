import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {

  render() {
    return (
      <div id="sidebar">
        <ul>
          <li><NavLink to='/flightsform' activeStyle={{
    'background-color': 'rgb(255,255,255)', color: 'rgb(0,0,0)'
   }}>Flight</NavLink></li>
          <li><NavLink to='/hotelsform' activeStyle={{
    'background-color': 'rgb(255,255,255)', color: 'rgb(0,0,0)'
   }}>Hotel</NavLink></li>
          <li><NavLink to='/carsform' activeStyle={{
    'background-color': 'rgb(255,255,255)', color: 'rgb(0,0,0)'
   }}>Car</NavLink></li>
          <li><NavLink to='/itinerary' activeStyle={{
    'background-color': 'rgb(255,255,255)', color: 'rgb(0,0,0)'
   }}>Itinerary</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;