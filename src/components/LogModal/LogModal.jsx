import useModalClose from "../../hooks/useModalClose";
import "./LogModal.css";

function LogModal({
  isOpen,
  onClose,
}) {

  useModalClose(isOpen, onClose);

  return (
    <div className={`log ${isOpen ? "log_opened" : ""}`}>
      <p className="log__text">Travel log</p>
    </div>
  );
}

export default LogModal;

  // photo
  // description
  // location
  // delete button
  // close button
  // edit button optional
