import React from "react";
import GoogleMapReact from 'google-map-react';




const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 51.5072,
      lng: 0.1276
    },
    zoom: 10
  };

  return (
    <div className="flex">
      <div style={{ height: '50vh', width: '70%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'https://maps.googleapis.com/maps/api/js?sensor=false&callback=myMap' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={51.5072}
            lng={0.1276}
            text="My Location"
          />
        </GoogleMapReact>
      </div>
      <div className="text-center ms-5 mt-5">
          <h3>Our Location</h3>
          <p>123 Harlington west B</p>
          <p>SW11 2PE</p>
      </div>
    </div>
  );
}
