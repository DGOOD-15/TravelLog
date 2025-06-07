import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Main from "./components/Main/Main";
import SignUpModal from "./components/SignUpModal/SignUpModal";
import LoginModal from "./components/LoginModal/LoginModal";
import AddLogModal from "./components/AddLogModal/AddLogModal";
import Footer from "./components/Footer/Footer";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const onSignUpClick = () => {
    setActiveModal("signUp");
  };

  const onLoginClick = () => {
    setActiveModal("login");
  };

  const onAddLogClick = () => {
    setActiveModal("addLog");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <>
      <Header />
      <LandingPage />
      <Main />
      <SignUpModal isOpen={activeModal === ""} onClose={closeActiveModal} />
      <LoginModal isOpen={activeModal === ""} onClose={closeActiveModal} />
      <AddLogModal isOpen={activeModal === ""} onClose={closeActiveModal} />
      <Footer />
    </>
  );
}

export default App;
