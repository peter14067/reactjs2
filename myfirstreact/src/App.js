import React, {Component}from "react"
import  './index4.css'; 

import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
    width: '100%',
    height: '100%',
  };
class App extends Component{
    render(){
        return(
        <div>
    <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />


        </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'TOKEN HERE'
  })(App)