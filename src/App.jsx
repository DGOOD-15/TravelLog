import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
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

  return (
    <div className="page">
      <Header
        onSignUpClick={onSignUpClick}
        onLoginClick={onLoginClick}
        onAddLogClick={onAddLogClick}
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
            />
          }
        />
      </Routes>
      <SignUpModal
        isOpen={activeModal === "signUp"}
        onClose={closeActiveModal}
      />
      <LoginModal isOpen={activeModal === "logIn"} onClose={closeActiveModal} />
      <AddLogModal
        isOpen={activeModal === "addLog"}
        onClose={closeActiveModal}
      />
      <LogModal
        isOpen={activeModal === "travelLog"}
        onClose={closeActiveModal}
        title="Travel log"
        item={selectedLog}
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
