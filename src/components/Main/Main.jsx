import Map from "../Map/Map";
import "./Main.css";

function Main({ onClose, isLoggedIn, pins, setPins, handleDeletePin }) {
  return (
    <main className="main">
      {" "}
      <section className="main__map">
        <Map
          onClose={onClose}
          isLoggedIn={isLoggedIn}
          pins={pins}
          setPins={setPins}
          handleDeletePin={handleDeletePin}
        />
      </section>
    </main>
  );
}

export default Main;
