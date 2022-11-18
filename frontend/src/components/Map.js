import React from "react";
import{
    GoogleMap,
    withScriptjs,
    withGoogleMap
} from 'react-google-maps';

const Map = (props)=>{
    return(
        <GoogleMap
        defaultZoom={10}
        defaultCenter={{lat: 14.843769, lng: -91.539097}}
        />
    );
};

export default withScriptjs(
    withGoogleMap(
        Map
    )
)
    
