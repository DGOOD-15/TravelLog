import "./LogCard.css";
import React from "react";

const LogCard = React.memo(function LogCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  console.log("Rendering LogCard with item:", item);

  return (
    <div className="profileLog__container">
      <img
        id={item._id}
        src={item.photoUrl}
        className="log__image"
        alt={item.location}
        onClick={handleCardClick}
      />
    </div>
  );
});

export default LogCard;
