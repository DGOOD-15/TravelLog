import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";
import LogCard from "./components/LogCard/LogCard";
import LogModal from "./components/LogModal/LogModal";
import SignUpModal from "./components/SignUpModal/SignUpModal";
import LoginModal from "./components/LoginModal/LoginModal";
import AddLogModal from "./components/AddLogModal/AddLogModal";
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
            <Profile onAddLogClick={onAddLogClick} onLogClick={onLogClick} />
          }
        />
      </Routes>
      {/* Following buttons for testing functionality only
          Please remove when no longer needed */}
      <button className="test__button" onClick={onLogClick}>
        My travel log
      </button>
      {/* End test buttons - to be removed */}
      <SignUpModal
        isOpen={activeModal === "signUp"}
        onClose={closeActiveModal}
      />
      <LoginModal isOpen={activeModal === "logIn"} onClose={closeActiveModal} />
      <AddLogModal
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        onClose={closeActiveModal}
      />
      <LogModal
        isOpen={activeModal === "travelLog"}
        onClose={closeActiveModal}
        title="Travel log"
        item={selectedLog}
      />
      <Footer />
    </div>
  );
}

export default App;
