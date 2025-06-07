import "./LogModal.css";
import useModalClose from "../../hooks/useModalClose";
import closeButton from "../../assets/closeButton.png";

function LogModal({ isOpen, onClose, title }) {
  useModalClose(isOpen, onClose);

  return (
    <div className={`log ${isOpen ? "log_opened" : ""}`}>
      <div className="log__container">
        <h2 className="log__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="log__close"
          src={closeButton}
        />
        <p className="log__text">Placeholder</p>
      </div>
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
