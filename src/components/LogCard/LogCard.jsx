import "./LogCard.css";
import placeholderImage from "../../assets/globewatercolor.jpg";

function LogCard() {
  return (
    <li className="logs">
      <div className="logs__title-container">
        <h2 className="logs__title">Travel log title</h2>
        <img
          //   onClick={handlelogsClick}
          src={placeholderImage}
          className="logs__image"
          //   alt={item.name}
        />
      </div>
    </li>
  );
}

export default LogCard;
