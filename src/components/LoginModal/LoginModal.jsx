import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

function LoginModal({ isOpen, onClose, handleLoginSubmit }) {
  const { values, errors, handleChange } = useForm({
    loginEmail: "",
    loginPassword: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    handleLoginSubmit(values);
  };

  return (
    <ModalWithForm
      title="Log In"
      name="logIn"
      buttonText="Log In"
      loginText="or Sign Up"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={onSubmit}
    >
      <label className="modal__label">
        Email*
        <input
          type="email"
          id="loginEmail"
          name="loginEmail"
          placeholder="Email address"
          className="modal__input"
          minLength="2"
          maxLength="50"
          required
          value={values.loginEmail}
          onChange={handleChange}
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>
      <label className="modal__label">
        Password*
        <input
          type="password"
          id="loginPassword"
          name="loginPassword"
          placeholder="Password"
          className="modal__input"
          minLength="2"
          maxLength="50"
          required
          value={values.loginPassword}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
