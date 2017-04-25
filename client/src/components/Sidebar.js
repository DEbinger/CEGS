import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <ul>
        <li><Link to='/flightsform'>Flight</Link></li>
        <li><Link to='/hotelsform'>Hotel</Link></li>
        <li><Link to='/cars'>Car</Link></li>
        <li><Link to='/itinerary'>Itinerary</Link></li>
      </ul>
    );
  }
}

export default Sidebar;