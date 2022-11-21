import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = (props) => {
  return (
    <GoogleMap
      defaultZoom={20}
      defaultCenter={{ lat: 14.84353, lng: -91.5402 }}
    />
  );
};

export default withScriptjs(withGoogleMap(Map));
