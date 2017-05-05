import React, { Component } from 'react';
import Globe from '@planet/react-globe';
import { connect } from 'react-redux';


class GlobeReact extends React.Component {
 constructor(props){
  super(props);
}
  render(){
    return (
      <div id="globe-image">
        <Globe center={[45, -75]}
        landColor="#7BEA7B"
        diameter={100}
        markerColor="yellow"
        oceanColor="#6CC3F9"
        shaded
        shadingOpacity={1}/>
      </div>
    );
    }
  }

export default GlobeReact;