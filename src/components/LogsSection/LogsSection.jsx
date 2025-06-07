import "./LogsSection.css";
import LogCard from "../LogCard/LogCard";
import { defaultTravelLogs } from "../../utils/constants";
//georgia
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
              location={item.location}
            //   onCardClick={onCardClick}
            />
          );
        })}
    </div>
  );
}

export default LogsSection;
