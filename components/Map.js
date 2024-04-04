"use client";
import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ apiKey }) => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(10);

  const handleMapClick = ({ lat, lng }) => {
    setCenter({ lat, lng });
  };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
        onClick={handleMapClick}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
