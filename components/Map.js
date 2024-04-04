"use client";
import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ apiKey }) => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [places, setPlaces] = useState([]);

  const handleMapClick = ({ lat, lng }) => {
    setCenter({ lat, lng });
  };

  const handleSearch = () => {
    if (searchQuery.trim() === "") return;

    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
    service.textSearch(
      {
        query: searchQuery,
        location: new window.google.maps.LatLng(center.lat, center.lng),
        radius: 10000, // Search within 10km radius of the center
      },
      (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPlaces(results);
          if (results.length > 0) {
            setCenter({
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng(),
            });
            setZoom(15); // Zoom to a closer level
          }
        } else {
          console.error("Search failed:", status);
        }
      }
    );
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Search location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div style={{ height: "400px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          center={center}
          zoom={zoom}
          onClick={handleMapClick}
        >
          {places.map((place, index) => (
            <div
              key={index}
              lat={place.geometry.location.lat()}
              lng={place.geometry.location.lng()}
            >
              {place.name}
            </div>
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
