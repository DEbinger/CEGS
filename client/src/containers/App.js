import React, { Component } from 'react';
import ReactDOM from "react-dom";
import ReactSimpleMap from "react-simple-maps";
import './App.css';

class App extends Component {

  componentWillMount() {
    console.log('mounting in app');
  }

  render() {
    return (
      <div>
        <h1>HOME PAGE</h1>
        <ReactSimpleMap
          geographyUrl={"../data/countries.topo.json"}
          events={{
            geography: {
              onClick: (geography, evt) => {
                if(`${geography.properties.admin}` === "United States of America") {
                  confirm(`Travel to the ${geography.properties.admin}!`);
                } else {
                  confirm(`Travel to ${geography.properties.admin}!`);
                }
              }
            }
          }}

        />
      </div>
    );
  }
}

export default App;