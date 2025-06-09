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
  const [pins, setPins] = useState(() => {
    const savedPins = localStorage.getItem("pins");
    return savedPins ? JSON.parse(savedPins) : [];
  });

  useEffect(() => {
    if (pins.length > 0) {
      localStorage.setItem("pins", JSON.stringify(pins));
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

  const handleRegistrationSubmit = async ({ email, password, name }) => {
    try {
      const userData = { name, email, password };

      localStorage.setItem("userData", JSON.stringify(userData));
      const data = await authorize(email, password);
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        const userData = await checkToken(data.token);
        if (userData.data) {
          closeActiveModal();
          // setActiveModal("success");
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const handleLoginSubmit = async ({ email, password }) => {
    try {
      const data = await authorize(email, password);
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        const userData = await checkToken(data.token);
        if (userData.data) {
          setCurrentUser(userData.data);
          setIsLoggedIn(true);
          closeActiveModal();
        }
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((userData) => {
          if (userData.data) {
            setCurrentUser(userData.data);
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
      />
      <LoginModal
        isOpen={activeModal === "logIn"}
        onClose={closeActiveModal}
        isLoggedIn={isLoggedIn}
        handleLoginSubmit={handleLoginSubmit}
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
      />
      <Footer />
    </div>
  );
}

export default App;
