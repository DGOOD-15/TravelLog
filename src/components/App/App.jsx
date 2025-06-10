import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { authorize, checkToken } from "../../utils/auth";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import LogModal from "../LogModal/LogModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import LoginModal from "../LoginModal/LoginModal";
import AddLogModal from "../AddLogModal/AddLogModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import Footer from "../Footer/Footer";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedLog, setSelectedLog] = useState({});
  const [pins, setPins] = useState([]);

  useEffect(() => {
    if (isLoggedIn && currentUser) {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = storedUsers.map((user) =>
        user.email === currentUser.email ? { ...user, pins } : user
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      const updatedUser = { ...currentUser, pins };
      setCurrentUser(updatedUser);
    }
  }, [pins]);

  const onSignUpClick = () => {
    setActiveModal("signUp");
  };

  const onLoginClick = () => {
    setActiveModal("logIn");
  };

  const onAddLogClick = () => {
    setActiveModal("addLog");
  };

  const onLogClick = (item) => {
    setActiveModal("travelLog");
    setSelectedLog(item);
  };

  const onEditProfileClick = () => {
    setActiveModal("editProfile");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleLoginLinkClick = () => {
    closeActiveModal();
    setActiveModal("logIn");
  };

  const handleSignUpLinkClick = () => {
    closeActiveModal();
    setActiveModal("signUp");
  };

  const handleRegistrationSubmit = async ({
    name,
    email,
    password,
    profilePic,
  }) => {
    try {
      const newUser = {
        name,
        email,
        password,
        profilePic: profilePic || "",
        _id: crypto.randomUUID(),
        pins: [],
      };

      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      const emailExists = existingUsers.some((user) => user.email === email);
      if (emailExists) {
        throw new Error("User with that email already exists.");
      }

      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      const data = await authorize(email, password);
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        const userDataFromToken = await checkToken(data.token);
        if (userDataFromToken.data) {
          setCurrentUser(userDataFromToken.data);
          setPins(userDataFromToken.data.pins || []);
          setIsLoggedIn(true);
          closeActiveModal();
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const handleLoginSubmit = async () => {
    const form = event.target;
    const email = form.email.value.trim();
    const password = form.password.value;

    try {
      const data = await authorize(email, password);
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        const userData = await checkToken(data.token);
        if (userData.data) {
          setCurrentUser(userData.data);
          setPins(userData.data.pins || []);
          setIsLoggedIn(true);
          closeActiveModal();
        }
      }
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Login failed: " + error.message);
    }
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((userData) => {
          if (userData.data) {
            setCurrentUser(userData.data);
            setPins(userData.data.pins || []);
            setIsLoggedIn(true);
          }
        })
        .catch((err) => {
          console.error(err);
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    setPins([]);
    localStorage.removeItem("jwt");
  };

  const handleDeletePin = (indexToDelete) => {
    setPins((prevPins) => prevPins.filter((_, idx) => idx !== indexToDelete));
  };

  return (
    <div className="page">
      <Header
        onSignUpClick={onSignUpClick}
        onLoginClick={onLoginClick}
        onAddLogClick={onAddLogClick}
        handleLogout={handleLogout}
        isLoggedIn={isLoggedIn}
        onEditProfileClick={onEditProfileClick}
        currentUser={currentUser}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              pins={pins}
              setPins={setPins}
              handleDeletePin={handleDeletePin}
              isLoggedIn={isLoggedIn}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              pins={pins}
              setPins={setPins}
              handleDeletePin={handleDeletePin}
              onAddLogClick={onAddLogClick}
              onLogClick={onLogClick}
              onEditProfileClick={onEditProfileClick}
              isLoggedIn={isLoggedIn}
            />
          }
        />
      </Routes>
      <SignUpModal
        isOpen={activeModal === "signUp"}
        onClose={closeActiveModal}
        handleRegistrationSubmit={handleRegistrationSubmit}
        handleLoginLinkClick={handleLoginLinkClick}
      />
      <LoginModal
        isOpen={activeModal === "logIn"}
        onClose={closeActiveModal}
        isLoggedIn={isLoggedIn}
        handleLoginSubmit={handleLoginSubmit}
        handleSignUpLinkClick={handleSignUpLinkClick}
      />
      <AddLogModal
        activeModal={activeModal === "addLog"}
        setActiveModal={setActiveModal}
        onClose={closeActiveModal}
      />
      <LogModal
        isOpen={activeModal === "travelLog"}
        onClose={closeActiveModal}
        title="Travel log"
        item={selectedLog}
        handleLoginSubmit={handleLoginSubmit}
      />
      <EditProfileModal
        isOpen={activeModal === "editProfile"}
        onClose={closeActiveModal}
        title="Edit profile"
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <Footer />
    </div>
  );
}

export default App;
