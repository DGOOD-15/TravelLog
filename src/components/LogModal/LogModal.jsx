import "./LogModal.css";
import useModalClose from "../../hooks/useModalClose";
import closeButton from "../../assets/closeButton.png";
import placeholderImage from "../../assets/globewatercolor.jpg";

function LogModal({ isOpen, onClose, title, item }) {
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
        <img src={item.link} className="log__image" alt={item.location} />
        <div className="log__info-container">
          <p className="log__date">Date placeholder</p>
          <p className="log__location">{item.location}</p>
        </div>
        <p className="log__description">{item.description}</p>
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
