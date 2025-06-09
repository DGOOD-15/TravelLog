import "./LogModal.css";
import useModalClose from "../../hooks/useModalClose";
import closeButton from "../../assets/closeButton.png";

function LogModal({ isOpen, onClose, title, item, onDelete, onEdit }) {
  useModalClose(isOpen, onClose);

  if (!item) return null;

  return (
    <div className={`log ${isOpen ? "log_opened" : ""}`}>
      <div className="log__container">
        <h2 className="log__title">{title}</h2>

        <button onClick={onClose} type="button" className="log__close">
          <img src={closeButton} alt="Close" />
        </button>

        <img
          src={item.photoUrl || placeholderImage}
          className="log__image"
          alt={item.location}
        />

        <div className="log__info-container">
          <p className="log__location">{item.location}</p>
        </div>

        <p className="log__description">{item.description}</p>

        <div className="log__actions">
          {onEdit && (
            <button className="log__edit-btn" onClick={onEdit}>
              Edit
            </button>
          )}
          <button className="log__delete-btn" onClick={onDelete}>
            Delete
          </button>
        </div>
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
