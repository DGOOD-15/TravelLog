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
  return (
    <>
      <Header />
      <LandingPage />
      <Main />

      <SignUpModal />
      <LoginModal />
      <AddLogModal />
      <Footer />
    </>
  );
}

export default App;