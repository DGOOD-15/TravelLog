import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddLogModal.css";
function AddLogModal({ isOpen, onClose, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const description = form.description.value;
    const photoUrl = form.photoUrl.value;
    const location = form.location.value;

    onSubmit({ description, photoUrl, location });
    onClose();
  };

  return (
    <ModalWithForm
      title="Add a memory"
      name="addLog"
      buttonText="Add to map"
      loginText=""
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" htmlFor="add-log-description">
        Description*
        <input
          type="text"
          id="add-log-description"
          name="description"
          placeholder="About this day..."
          className="modal__input"
          minLength="2"
          maxLength="50"
          required
        />
      </label>

      <label className="modal__label" htmlFor="add-log-photoUrl">
        Photo URL
        <input
          type="url"
          id="add-log-photoUrl"
          name="photoUrl"
          placeholder="Image link"
          className="modal__input"
          minLength="2"
        />
      </label>

      <label className="modal__label" htmlFor="add-log-location">
        Location*
        <input
          type="text"
          id="add-log-location"
          name="location"
          placeholder="Location"
          className="modal__input"
          minLength="2"
          maxLength="50"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default AddLogModal;
