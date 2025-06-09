import { useState } from "react";
import LogCard from "../LogCard/LogCard";
import LogModal from "../LogModal/LogModal";

function LogsSection({ logs = [], setLogs, handleDeletePin }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  const handleDeleteLog = () => {
    if (selectedIndex !== null) {
      handleDeletePin(selectedIndex); // This calls App’s central delete logic
      handleCloseModal();
    }
  };

  return (
    <section className="logs-section">
      {logs.length > 0 ? (
        logs.map((pin, index) => (
          <LogCard
            key={pin._id || index}
            item={pin}
            onCardClick={() => handleCardClick(index)}
          />
        ))
      ) : (
        <p>No logs yet.</p>
      )}

      {selectedIndex !== null && (
        <LogModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title="Memory Log"
          item={logs[selectedIndex]}
          onDelete={handleDeleteLog}
        />
      )}
    </section>
  );
}

export default LogsSection;
