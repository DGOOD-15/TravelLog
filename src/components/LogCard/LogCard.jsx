import "./LogCard.css";
import placeholderImage from "../../assets/globewatercolor.jpg";

function LogCard({
  imageUrl,
  imageId,
  description,
  // onCardClick
}) {
  return (
    <div className="log__container">
      <img
        id={imageId}
        src={imageUrl}
        className="log__image"
        alt={description}
      />
    </div>
  );
}

export default LogCard;
