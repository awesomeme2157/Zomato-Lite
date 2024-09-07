import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position = [51.505, -0.09]; // Example: Coordinates for London

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-5xl h-[80vh] border-4 border-gray-300 rounded-xl shadow-lg overflow-hidden">
        <MapContainer center={position} zoom={13} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>You are here</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
