import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = (props)=>{
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: 40.3948339731799, lng: -3.864439595605727}} 
        />
    );
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)

//40.3948339731799, -3.864439595605727