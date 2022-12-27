import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = (props)=>{
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: 40.4449323572, lng: -3.711167009037225}} 
        />
    );
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)