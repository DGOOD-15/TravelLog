import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddLogModal.css";
function AddLogModal() {
  //add photo
  // description
  // add button
  // cancel/close button
  // location
return (
  <ModalWithForm
    title="Add a memory"
    name="addLog"
    buttonText="Add to map"
    loginText=""
  >
    <label className="modal__label">
        Description*
        <input
          type=""
          id=""
          name=""
          placeholder=""
          className="modal__input"
          minLength="2"
          maxLength="50"
          required
        />
      </label>
      <label className="modal__label">
        Photo URL
        <input
          type=""
          id=""
          name=""
          placeholder=""
          className="modal__input"
          minLength="2"
          maxLength="50"
        />
      </label>
      <label className="modal__label">
        Location
        <input
          type=""
          id=""
          name=""
          placeholder=""
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
