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

  const handleRegistrationSubmit = async ({ email, password, name }) => {
    try {
      console.log("Starting registration with:", { email, name });
      const userData = { name, email, password };
      console.log("About to store userData:", userData);
      localStorage.setItem("userData", JSON.stringify(userData));
      console.log(
        "Checking localStorage after setting:",
        localStorage.getItem("userData")
      );

      const data = await authorize(email, password);
      console.log("Authorize response:", data);
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        const userData = await checkToken(data.token);
        console.log("CheckToken response:", userData);
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
        onEditProfileClick={onEditProfileClick}
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
