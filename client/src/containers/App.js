import React, { Component } from 'react';
import ReactSimpleMap from "react-simple-maps";
import './App.css';

class App extends Component {

  componentWillMount() {
    console.log('mounting in app');
  }

  render() {
    return (
    	<div id="home">
      	<h1>Adventure Awaits!</h1>
      </div>
    );
  }
}

export default App;