import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GoogleMapComponent = () => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 40.712776, // Example: Latitude for New York City
    lng: -74.005974, // Example: Longitude for New York City
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
