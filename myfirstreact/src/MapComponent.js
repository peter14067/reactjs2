import { Map, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from "react";



const mapStyles = {
  width: '100%',
  height: '100%',
};

 class MapContainer extends Component {
render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 23.896306, lng: 120.471833}}
        />
    );
  }
}


  export default GoogleApiWrapper({
  apiKey: 'AIzaSyA4p9qITrfmPb9pVldQHhJUVKKjglFt73M'
})(MapContainer);