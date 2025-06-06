import { GoogleMap, useLoadScript } from "@react-google-maps/api";
// import "./Map.css";

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <section className="map">
      <div className="map__container">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "400px" }}
          className="map__map"
          center={{ lat: 39.8283, lng: -98.5795 }}
          zoom={4}
        ></GoogleMap>
      </div>
    </section>
  );
}

export default Map;
