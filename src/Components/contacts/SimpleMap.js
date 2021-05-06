import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./SimpleMap.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.85,
      lng: 18.41,
    },
    zoom: 11,
  };

  render() {
    return (
      <div className="map" style={{ height: "50vh", width: "50%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBn0NYOk5HAGydEaS1yv2QMz9WJFe0r4C4" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={43.8563} lng={18.4131} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
