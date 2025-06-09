import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./Map.css";
import { useState, useEffect, useRef } from "react";
import AddLogModal from "../AddLogModal/AddLogModal";
import LogModal from "../LogModal/LogModal";

function Map({ isLoggedIn, pins, setPins }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const mapRef = useRef(null);

  const [tempPin, setTempPin] = useState(null);
  const [isAddingMemory, setIsAddingMemory] = useState(false);
  const [isAddLogModalOpen, setAddLogModalOpen] = useState(false);
  const [selectedPin, setSelectedPin] = useState(null);

  // Store map center and zoom in state to control map initial view
  const [mapCenter, setMapCenter] = useState({ lat: 39.8283, lng: -98.5795 });
  const [mapZoom, setMapZoom] = useState(4);

  // Load pins from localStorage on mount
  useEffect(() => {
    const storedPins = localStorage.getItem("pins");
    if (storedPins) {
      setPins(JSON.parse(storedPins));
    }
  }, []);

  // Save pins to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("pins", JSON.stringify(pins));
  }, [pins]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  const onMapLoad = (map) => {
    mapRef.current = map;
  };

  const handleMapClick = (e) => {
    if (!isAddingMemory) return;

    const lat = e.latLng.lat();
    const lng = e.latLng.lng();

    setTempPin({ lat, lng });
    setIsAddingMemory(false);
    setAddLogModalOpen(true);
  };

  const handleClose = () => {
    setAddLogModalOpen(false);
  };

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
    handleClose();
  };

  const handleDeletePin = (pinToDelete) => {
    const updatedPins = pins.filter(
      (pin) =>
        pin.lat !== pinToDelete.lat ||
        pin.lng !== pinToDelete.lng ||
        pin.description !== pinToDelete.description
    );
    setPins(updatedPins);
    setSelectedPin(null);
  };

  // Update center and zoom state only when user stops moving/zooming the map
  const onIdle = () => {
    if (mapRef.current) {
      const newCenter = mapRef.current.getCenter();
      setMapCenter({ lat: newCenter.lat(), lng: newCenter.lng() });
      setMapZoom(mapRef.current.getZoom());
    }
  };

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
            onIdle={onIdle} // update center & zoom after interaction ends
          >
            {pins.map((pin, index) => (
              <Marker
                key={index}
                position={{ lat: pin.lat, lng: pin.lng }}
                onClick={() => setSelectedPin(pin)}
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
          {!isLoggedIn ? (
            <div className="map__tooltip-text">
              Must sign in to add memories
            </div>
          ) : (
            <div className="map__tooltip-text">Click map to add a memory</div>
          )}
        </div>
      </div>

      <AddLogModal
        isOpen={isAddLogModalOpen}
        onClose={handleClose}
        title="Add a Memory"
        onSubmit={handleAddMemorySubmit}
      />

      <LogModal
        isOpen={!!selectedPin}
        onClose={() => setSelectedPin(null)}
        title="Memory Details"
        item={selectedPin}
        onDelete={() => handleDeletePin(selectedPin)}
      />
    </section>
  );
}

export default Map;
