import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentWillMount() {
    console.log('mounting in app');
  }

  render() {
    return (
      <h1>HOME PAGE</h1>
    );
  }
}

export default App;
