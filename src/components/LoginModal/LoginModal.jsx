import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

function LoginModal({
  isOpen,
  onClose,
  handleLoginSubmit,
  handleSignUpLinkClick,
}) {
  const { values, errors, handleChange } = useForm({
    email: "",
    password: "",
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
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={onSubmit}
      onAltActionClick={handleSignUpLinkClick}
      loginText="or Sign up"
    >
      <label className="modal__label">
        Email*
        <input
          type="email"
          name="email"
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
          name="password"
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
