import "./LogModal.css";
import useModalClose from "../../hooks/useModalClose";
import closeButton from "../../assets/closeButton.png";
import placeholderImage from "../../assets/globewatercolor.jpg";

function LogModal({ isOpen, onClose, title, imageUrl, imageId, location, description }) {
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
        <img
          src={placeholderImage}
          className="log__image"
          //   alt={item.name}
        />
        <div className="log__info-container">
          <p className="log__date">Travel date</p>
          <p className="log__location">Travel location</p>
        </div>
        <p className="log__description">
          Description placeholder text yadda yadda
        </p>
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
