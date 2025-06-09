import Map from "../Map/Map";
import "./Main.css";

function Main({ onClose, isLoggedIn, currentUser, pins, setPins }) {
  return (
    <main className="main">
      {" "}
      <section className="main__map">
        <Map
          onClose={onClose}
          isLoggedIn={isLoggedIn}
          pins={pins}
          setPins={setPins}
        />
      </section>
    </main>
  );
}

export default Main;
