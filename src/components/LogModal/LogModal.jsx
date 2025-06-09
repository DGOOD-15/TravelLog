import "./LogModal.css";
import useModalClose from "../../hooks/useModalClose";
import { useEffect } from "react";
import LogCard from "../LogCard/LogCard";

function LogModal({ isOpen, onClose, title, item, onDelete, onEdit }) {
  useModalClose(isOpen, onClose);

  useEffect(() => {
    if (item?.photoUrl) {
    }
  }, [item?.id]);

  if (!item) return null;

  return (
    <div className={`log ${isOpen ? "log_opened" : ""}`}>
      <div className="log__container">
        <h2 className="log__title">{title}</h2>

        <button onClick={onClose} type="button" className="log__close"></button>

        {item.photoUrl && (
          <img
            src={item.photoUrl}
            alt={item.location}
            className="log-card__image"
          />
        )}

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
