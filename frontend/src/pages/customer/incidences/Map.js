import React from "react";
import { useState } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

const Map = (props)=>{

    const [ marker, setMarker ] = useState(null)

    const markerSet = (value) =>{
        const {latLng} = value;
        const {lat, lng} = latLng;
        const latValue = parseFloat(lat());
        const lngValue = parseFloat(lng());
        console.log("lat", latValue, "long", lngValue);
        props.setLocalization({lat: latValue, lng: lngValue})
        setMarker({lat: latValue, lng: lngValue});
        console.log("marker set", value);
    }
    return (
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{lat: 40.4449323572, lng: -3.711167009037225}} 
            onClick={markerSet}
            options={{streetViewControl: false}}
            >
                <Marker position={{ lat: parseFloat(marker?.lat), lng: parseFloat(marker?.lng)}} />
            </GoogleMap>
    );
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)