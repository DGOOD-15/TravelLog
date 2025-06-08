import "./LogCard.css";

function LogCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <div className="log__container">
      <img
        id={item._id}
        src={item.link}
        className="log__image"
        alt={item.location}
        onClick={handleCardClick}
      />
    </div>
  );
}

export default LogCard;
