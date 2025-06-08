import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { authorize, checkToken } from "./utils/auth";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";
import LogModal from "./components/LogModal/LogModal";
import SignUpModal from "./components/SignUpModal/SignUpModal";
import LoginModal from "./components/LoginModal/LoginModal";
import AddLogModal from "./components/AddLogModal/AddLogModal";
import EditProfileModal from "./components/EditProfileModal/EditProfileModal";
import Footer from "./components/Footer/Footer";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedLog, setSelectedLog] = useState({});

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

  const handleLoginSubmit = async ({ email, password }) => {
    try {
      const data = await authorize(email, password);
      if (data.token) {
        console.log("Submit started");
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

  return (
    <div className="page">
      <Header
        onSignUpClick={onSignUpClick}
        onLoginClick={onLoginClick}
        onAddLogClick={onAddLogClick}
        handleLogout={handleLogout}
        isLoggedIn={isLoggedIn}
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/profile"
          element={
            <Profile
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
      />
      <LoginModal
        isOpen={activeModal === "logIn"}
        onClose={closeActiveModal}
        isLoggedIn={isLoggedIn}
        handleLoginSubmit={handleLoginSubmit}
      />
      <AddLogModal
        isOpen={activeModal === "addLog"}
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
