import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function EditProfileModal({ isOpen, onClose, currentUser, setCurrentUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profilePic: "",
  });

  useEffect(() => {
    if (isOpen && currentUser) {
      setFormData({
        name: currentUser.name || "",
        email: currentUser.email || "",
        password: currentUser.password || "",
        profilePic: currentUser.profilePic || "",
      });
    }
  }, [isOpen, currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((user) =>
      user.email === currentUser.email
        ? { ...user, ...formData, pins: user.pins || [] }
        : user
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setCurrentUser({ ...formData, pins: currentUser.pins || [] });

    onClose();
  };

  return (
    <ModalWithForm
      title="Edit profile"
      buttonText="Update profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="modal__input"
          minLength="2"
          maxLength="50"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="modal__input"
          minLength="2"
          maxLength="50"
          value={formData.email}
          onChange={handleChange}
          disabled
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="modal__input"
          minLength="2"
          maxLength="50"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <label className="modal__label">
        Profile Picture
        <input
          type="url"
          name="profilePic"
          placeholder="Image link"
          className="modal__input"
          minLength="2"
          value={formData.profilePic}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
