import "./LogsSection.css";
import LogCard from "../LogCard/LogCard";
import { defaultTravelLogs } from "../../utils/constants";

function LogsSection({
    onCardClick
}) {
  return (
    <div className="logs">
      {defaultTravelLogs
        .map((item) => {
          return (
            <LogCard
              imageUrl={item.link}
              imageId={item._id}
              location={item.location}
              onCardClick={onCardClick}
            />
          );
        })}
    </div>
  );
}

export default LogsSection;
