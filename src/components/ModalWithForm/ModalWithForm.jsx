import "./ModalWithForm.css";
import useModalClose from "../../hooks/useModalClose";
import closeButton from "../../assets/closeButton.png";

function ModalWithForm({
  children,
  buttonText,
  title,
  onClose,
  isOpen,
  onSubmit,
  loginText,
}) {
  useModalClose(isOpen, onClose);

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <form className="modal__form" onSubmit={onSubmit}>
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
          src={closeButton}
        />
        <div className="modal__form-fields">{children}</div>
        <div className="modal__submit-container">
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
          <p className="modal__login">{loginText}</p>
        </div>
      </form>
    </div>
  );
}

export default ModalWithForm;
