import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
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

  const onLogClick = () => {
    setActiveModal("travelLog");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <Header />
      <Main />
      {/* Following buttons for testing functionality only
          Please remove when no longer needed */}
      <button className="test__button" onClick={onSignUpClick}>Sign Up</button>
      <button className="test__button" onClick={onLoginClick}>Login</button>
      <button className="test__button" onClick={onAddLogClick}>Add log</button>
      <button className="test__button" onClick={onLogClick}>My travel log</button>
      {/* End test buttons - to be removed */}
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
      />
      <Footer />
    </div>
  );
}

export default App;
