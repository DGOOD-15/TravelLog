import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Main from "./components/Main/Main";
import LogModal from "./components/LoginModal/LoginModal";
import SignUpModal from "./components/SignUpModal/SignUpModal";
import LoginModal from "./components/LoginModal/LoginModal";
import AddLogModal from "./components/AddLogModal/AddLogModal";
import Footer from "./components/Footer/Footer";

function App() {
  const [activeModal, setActiveModal] = useState("");
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
    setActiveModal("log");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <>
      <Header />
      <LandingPage />
      <Main />
      {/* Following buttons for testing functionality only
          Please remove when no longer needed */}
      <button onClick={onSignUpClick}>Sign Up</button>
      <button onClick={onLoginClick}>Login</button>
      <button onClick={onAddLogClick}>Add log</button>
      <button onCliCk={onLogClick}>My travel log</button>
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
      <Footer />
    </>
  );
}

export default App;
