import "./LogsSection.css";
import LogCard from "../LogCard/LogCard";
import { defaultTravelLogs } from "../../utils/constants";

function LogsSection() {
  return (
    <div className="logs">
      {defaultTravelLogs
        // IMPLEMENT SIMILAR LOGIC LATER:
        // .filter((item) => {
        //   return item.owner === currentUser._id ? true : false;
        // })
        .map((item) => {
          return (
            <LogCard
              imageUrl={item.link}
              imageId={item._id}
              description={item.description}
            //   onCardClick={onCardClick}
            />
          );
        })}
    </div>
  );
}

export default LogsSection;
