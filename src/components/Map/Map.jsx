import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./Map.css";
import { useState, useEffect } from "react";
import AddLogModal from "../AddLogModal/AddLogModal";
import LogModal from "../LogModal/LogModal";

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });
  const [tempPin, setTempPin] = useState(null);
  const [pins, setPins] = useState([]);
  const [isAddingMemory, setIsAddingMemory] = useState(false);
  const [isAddLogModalOpen, setAddLogModalOpen] = useState(false);
  const [selectedPin, setSelectedPin] = useState(null);
  const [hoveredPin, setHoveredPin] = useState(null);

  useEffect(() => {
    const storedPins = localStorage.getItem("pins");
    if (storedPins) {
      setPins(JSON.parse(storedPins));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pins", JSON.stringify(pins));
  }, [pins]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

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
        pin.description !== pinToDelete.description // To uniquely identify
    );
    setPins(updatedPins);
    setSelectedPin(null);
  };

  return (
    <section className="map">
      <div className="map__polaroid-frame">
        <div className="map__container">
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={{ lat: 39.8283, lng: -98.5795 }}
            zoom={4}
            onClick={handleMapClick}
          >
            {pins.map((pin, index) => (
              <Marker
                key={index}
                position={{ lat: pin.lat, lng: pin.lng }}
                onClick={() => setSelectedPin(pin)}
                onMouseOver={() => setHoveredPin(pin)}
                onMouseOut={() => setHoveredPin(null)}
              />
            ))}
          </GoogleMap>
        </div>
        <button
          className="map__add-memory-btn"
          onClick={() => setIsAddingMemory(true)}
        >
          Add Memory
        </button>
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
