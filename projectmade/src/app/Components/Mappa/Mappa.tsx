"use client";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function Mappa({ data }: any) {
  const markers = data.map((school: any) => {
    // console.log(school);
    return {
      lat: school.attributes.Location.coordinates[0],
      lng: school.attributes.Location.coordinates[1],
      street: school.attributes.Location.street,
      popupText: school.attributes.name,
      color: school.attributes.istituteType,
    };
  });
  // console.log("markers: ", JSON.stringify(markers, null, 4));
  const iconType = (color: string) => {
    // console.log(color);
    switch (color) {
      case "Liceo":
        return customIconOrange;

      case "Tecnico":
        return customIconCyan;

      case "Professionale":
        return customIconGreen;

      case "Trasporti":
        return customIconTreni;

      case "Convitto":
        return customIconConvitto;

      case "Mensa":
        return customIconMensa;

      default:
        return customIconGreenBlue;
    }
  };

  const customIconOrange = new L.Icon({
    iconUrl: "/Orange.svg",
    iconSize: [32, 32], // specify the size of the icon
  });
  const customIconCyan = new L.Icon({
    iconUrl: "/Cyan.svg",
    iconSize: [32, 32], // specify the size of the icon
  });
  const customIconGreen = new L.Icon({
    iconUrl: "/Green.svg",
    iconSize: [32, 32], // specify the size of the icon
  });
  const customIconTreni = new L.Icon({
    iconUrl: "/Treni.svg",
    iconSize: [32, 32], // specify the size of the icon
  });
  const customIconConvitto = new L.Icon({
    iconUrl: "/Letto.svg",
    iconSize: [32, 32], // specify the size of the icon
  });
  const customIconMensa = new L.Icon({
    iconUrl: "/PalleNelCulo.svg",
    iconSize: [32, 32], // specify the size of the icon
  });
  const customIconGreenBlue = new L.Icon({
    iconUrl: "/GreenBlue.svg",
    iconSize: [32, 32], // specify the size of the icon
  });

  return (
    <MapContainer
      center={[45.887384120868745, 11.033286614780325]}
      zoom={14}
      style={{ height: "75vh", width: "75wh" }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker: any, index: any) => {
        // console.log(iconType(marker.color));
        return (
          <Marker
            key={index}
            position={[marker.lat, marker.lng]}
            icon={iconType(marker.color)}
          >
            <Popup>{marker.popupText + "\n" + marker.street}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
