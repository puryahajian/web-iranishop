import { useState, useEffect } from "react";
import Map, { Marker, NavigationControl } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import useGetProfile from "../../../hooks/use-get-profile";

function Mapp({ setAddressMapp }) {
  const { data } = useGetProfile();

  const savedCoords = localStorage.getItem("markerCoords");
  const initialCoords = savedCoords
    ? JSON.parse(savedCoords)
    : data?.latitude && data?.longitude
    ? { latitude: data.latitude, longitude: data.longitude }
    : { latitude: 35.6997, longitude: 51.3381 }; // افتراضي طهران

  const [marker, setMarker] = useState(initialCoords);
  const [viewState, setViewState] = useState({
    longitude: initialCoords.longitude,
    latitude: initialCoords.latitude,
    zoom: 14,
  });

  const [addressPreview, setAddressPreview] = useState("");

  const handleMapClick = async (event) => {
    const { lng, lat } = event.lngLat;
    const newMarker = { longitude: lng, latitude: lat };
    setMarker(newMarker);
    setViewState((prev) => ({ ...prev, longitude: lng, latitude: lat }));
    localStorage.setItem("markerCoords", JSON.stringify(newMarker));

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
      );
      const addressData = await res.json();
      setAddressMapp(addressData);

      if (addressData) {
        const addressString = [
          addressData.address.road,
          addressData.address.neighbourhood,
          addressData.address.suburb,
          addressData.address.city,
          addressData.address.state,
          addressData.address.country,
        ]
          .filter(Boolean)
          .join("، ");
        setAddressPreview(addressString);
      } else {
        setAddressPreview("آدرس پیدا نشد");
      }
    } catch (err) {
      console.error("Error fetching address:", err);
      setAddressMapp("خطأ في جلب العنوان");
      setAddressPreview("خطأ في جلب العنوان");
    }
  };

  return (
    <div className="rounded-2xl">
      <Map
        mapLib={maplibregl}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: "100%", height: "325px", borderRadius: "16px" }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=lnmmfMnxdJ1bDyVGN18J"
        onClick={handleMapClick}
      >
        <NavigationControl position="top-left" />
        {marker && (
          <Marker
            longitude={marker.longitude}
            latitude={marker.latitude}
            color="#61dbfb"
          />
        )}
      </Map>
    </div>
  );
}

export default Mapp;
