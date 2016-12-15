import React, { PropTypes } from 'react';
import { GoogleMapLoader, GoogleMap } from "react-google-maps";

const GoogleMaps = (props) => {
    return (
        <GoogleMapLoader
            containerElement={<div style={{height: "100%"}}/>}
            googleMapElement={
                <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lon }} />
            }
        />
    );
};

export default GoogleMaps;