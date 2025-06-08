import Map from "../Map/Map";
import "./Main.css";

function Main(onClose) {
  return (
    <main className="main">
      {" "}
      <section className="main__map">
        <Map onClose={onClose} />
      </section>
    </main>
  );

  // logs
}

export default Main;
