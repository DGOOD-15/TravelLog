import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "./Map.css";
import { useState } from "react";

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });
  const [pins, setPins] = useState([]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <section className="map">
      <div className="map__polaroid-frame">
        <div className="map__container">
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={{ lat: 39.8283, lng: -98.5795 }}
            zoom={4}
          ></GoogleMap>
        </div>
      </div>
    </section>
  );
}

export default Map;
