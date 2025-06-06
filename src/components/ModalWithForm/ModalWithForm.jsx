import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  name,
  onClose,
  isOpen,
  onSubmit,
  loginText,
}) {
  return (
    <div className="modal">
      <form className="modal__form" onSubmit={onSubmit}>
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close" />
        {children}
        <div className="modal__submit-container">
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
          <button type="button" className="modal__login">
            {loginText}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalWithForm;
