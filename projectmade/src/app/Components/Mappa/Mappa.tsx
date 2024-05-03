"use client";
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { useEffect, useState } from "react";
import { divIcon } from "leaflet";

const dualColorIcon = divIcon({
  className: 'custom-marker-icon',
  html: `<div style="background-color: blue; width: 20px; height: 20px; border-radius: 50%; border: 2px solid green;"></div>`,
});


export default  function Mappa({data}: any) {
  
  const markers = data.map((school: any) => ({
    lat: school.attributes.Location.coordinates[0],
    lng: school.attributes.Location.coordinates[1],
    popupText: school.attributes.name,
    color: school.istituteType
}))
const iconType = (color: string) => {
  switch (color) {
    case "Liceo":
      return "leaflet/dist/images/marker-icon-orange.png";
    case "Tecnico":
      return "leaflet/dist/images/marker-icon.png";
    case "Professionale":
      return "leaflet/dist/images/marker-icon-green.png";
    default:
      return dualColorIcon;
  }
}


  return (
    <MapContainer center={[45.887384120868745, 11.033286614780325]} zoom={13}  style={{ height: '100vh', width: '100wh'} } zoomControl = {false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker:any, index:any) => (
        <Marker key={index} position={[marker.lat, marker.lng]} icon ={new L.Icon({ iconURL:iconType(marker.color) , iconSize:[32,32]})}>
          <Popup>{marker.popupText}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
