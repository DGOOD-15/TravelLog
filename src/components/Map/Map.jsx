import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./Map.css";
import { useState, useRef, useCallback } from "react";
import AddLogModal from "../AddLogModal/AddLogModal";
import LogModal from "../LogModal/LogModal";

function Map({ isLoggedIn, pins, setPins, handleDeletePin }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const mapRef = useRef(null);
  const [tempPin, setTempPin] = useState(null);
  const [isAddingMemory, setIsAddingMemory] = useState(false);
  const [isAddLogModalOpen, setAddLogModalOpen] = useState(false);
  const [selectedPin, setSelectedPin] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: 39.8283, lng: -98.5795 });
  const [mapZoom, setMapZoom] = useState(4);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const handleMapClick = useCallback(
    (e) => {
      if (!isAddingMemory) return;

      const lat = e.latLng.lat();
      const lng = e.latLng.lng();

      setTempPin({ lat, lng });
      setIsAddingMemory(false);
      setAddLogModalOpen(true);
    },
    [isAddingMemory]
  );

  const handleCloseModal = useCallback(() => {
    setAddLogModalOpen(false);
    setSelectedPin(null);
  }, []);

  const handleAddMemorySubmit = ({ description, photoUrl, location }) => {
    if (!tempPin) return;

    const newPin = {
      lat: tempPin.lat,
      lng: tempPin.lng,
      description,
      photoUrl,
      location,
    };

    setPins((prev) => [...prev, newPin]);
    setTempPin(null);
    setAddLogModalOpen(false);
  };

  const handleDeleteSelectedPin = () => {
    if (selectedPin === null) return;

    handleDeletePin(selectedPin);
    setSelectedPin(null);
  };

  const onIdle = useCallback(() => {
    if (!mapRef.current) return;

    const newCenter = mapRef.current.getCenter();
    const newLat = newCenter.lat();
    const newLng = newCenter.lng();
    const newZoom = mapRef.current.getZoom();

    if (
      newLat !== mapCenter.lat ||
      newLng !== mapCenter.lng ||
      newZoom !== mapZoom
    ) {
      setMapCenter({ lat: newLat, lng: newLng });
      setMapZoom(newZoom);
    }
  }, [mapCenter, mapZoom]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <section className="map">
      <div className="map__polaroid-frame">
        <div className="map__container">
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={mapCenter}
            zoom={mapZoom}
            onLoad={onMapLoad}
            onClick={handleMapClick}
            onIdle={onIdle}
          >
            {pins.map((pin, index) => (
              <Marker
                key={index}
                position={{ lat: pin.lat, lng: pin.lng }}
                onClick={() => setSelectedPin(index)}
              />
            ))}
          </GoogleMap>
        </div>

        <div className="map__tooltip-container">
          <button
            className="map__add-memory-btn"
            onClick={() => setIsAddingMemory(true)}
            disabled={!isLoggedIn}
          >
            Add Memory
          </button>
          <div className="map__tooltip-text">
            {isLoggedIn
              ? "Click map to add a memory"
              : "Must sign in to add memories"}
          </div>
        </div>
      </div>

      <AddLogModal
        isOpen={isAddLogModalOpen}
        onClose={handleCloseModal}
        title="Add a Memory"
        onSubmit={handleAddMemorySubmit}
      />

      <LogModal
        isOpen={selectedPin !== null}
        onClose={handleCloseModal}
        title="Memory Details"
        item={selectedPin !== null ? pins[selectedPin] : null}
        onDelete={handleDeleteSelectedPin}
      />
    </section>
  );
}

export default Map;
