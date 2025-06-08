import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useModalClose from "../../hooks/useModalClose";

function EditProfileModal({ isOpen, onClose }) {
  return (
    <ModalWithForm
      title="Edit profile"
      buttonText="Update profile"
      loginText="Reset"
      isOpen={isOpen}
      onClose={onClose}
      // onSubmit={onSubmit}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="modal__input"
          minLength="2"
          maxLength="50"
        />
      </label>
      <label className="modal__label">
        Email
        <input
          type="email"
          id="signUpEmail"
          name="signUpEmail"
          placeholder="Email address"
          className="modal__input"
          minLength="2"
          maxLength="50"
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          id="signUpPassword"
          name="signUpPassword"
          placeholder="Password"
          className="modal__input"
          minLength="2"
          maxLength="50"
        />
      </label>
      <label className="modal__label">
        Profile Picture
        <input
          type="url"
          id="profilePic"
          name="profilePic"
          placeholder="Image link"
          className="modal__input"
          minLength="2"
          maxLength="50"
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
