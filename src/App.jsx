import { useState } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Main from "./components/Main/Main";
import Map from "./components/Map/Map";
import SignUpModal from "./components/SignUpModal/SignUpModal";
import LoginModal from "./components/LoginModal/LoginModal";
import AddLogModal from "./components/AddLogModal/AddLogModal";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <LandingPage />
      <Main />
      <Map />
      <SignUpModal />
      <LoginModal />
      <AddLogModal />
      <Footer />
    </>
  );
}

export default App;
