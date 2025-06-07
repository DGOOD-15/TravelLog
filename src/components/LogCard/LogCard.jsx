import "./LogCard.css";
import placeholderImage from "../../assets/globewatercolor.jpg";
// georgia
function LogCard() {
  return (
    <div className="log__container">
      <h2 className="log__title">Travel log title</h2>
      <img
        src={placeholderImage}
        className="log__image"
        //   alt={item.name}
      />
      <div className="log__info-container">
        <p className="log__date">Travel date</p>
        <p className="log__location">Travel location</p>
      </div>
      <p className="log__description">Description placeholder text yadda yadda</p>
    </div>
  );
}

export default LogCard;
