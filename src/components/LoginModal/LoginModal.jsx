import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal() {
  //email
  //password
  // sign in button
  // close button
  return (
    <ModalWithForm
      title="Log In"
      name="logIn"
      buttonText="Log In"
      loginText="or Sign Up"
    >
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
    </ModalWithForm>
  );
}

export default LoginModal;
