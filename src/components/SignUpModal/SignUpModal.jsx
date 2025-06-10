import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

function SignUpModal({
  isOpen,
  onClose,
  handleRegistrationSubmit,
  handleLoginLinkClick,
}) {
  const { values, errors, handleChange } = useForm({
    email: "",
    password: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      profilePic: form.profilePic.value,
    };
    handleRegistrationSubmit(formData, values);
  };
  return (
    <ModalWithForm
      title="Create an account"
      name="signUp"
      buttonText="Sign Up"
      loginText="or Log In"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={onSubmit}
      onAltActionClick={handleLoginLinkClick}
    >
      <label className="modal__label">
        Name*
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="modal__input"
          minLength="2"
          maxLength="50"
          required
        />
      </label>
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
          value={values.email}
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
        />
      </label>
    </ModalWithForm>
  );
}

export default SignUpModal;
