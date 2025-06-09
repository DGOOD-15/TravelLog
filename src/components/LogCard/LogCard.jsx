import "./LogCard.css";

function LogCard({ item, onCardClick }) {
  return (
    <div className="log-card" onClick={onCardClick}>
      {item.photoUrl && (
        <img
          src={item.photoUrl}
          alt={item.location}
          className="log-card__image"
        />
      )}
      <div className="log-card__content">
        <h3 className="log-card__location">{item.location}</h3>
        <p className="log-card__description">{item.description}</p>
      </div>
    </div>
  );
}

export default LogCard;
