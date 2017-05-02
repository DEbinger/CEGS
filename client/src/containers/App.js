import React, { Component } from 'react';
// import logo from './logo.svg';
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
