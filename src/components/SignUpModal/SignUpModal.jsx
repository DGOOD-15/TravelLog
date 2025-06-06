import "./SignUpModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignUpModal() {
  return (
    <ModalWithForm
      title="Create an account"
      name="signUp"
      buttonText="Sign Up"
      loginText="or Log In"
      // onClose={onClose}
      // isOpen={isOpen}
      // onSubmit={onSubmit}
    >
      <label className="modal__label">
        Name*
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
        Email*
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
        Password*
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
        Profile Picture
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

export default SignUpModal;
