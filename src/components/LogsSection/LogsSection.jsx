import "./LogsSection.css";
import LogCard from "../LogCard/LogCard";
import { defaultTravelLogs } from "../../utils/constants";

function LogsSection({ pins = [], onCardClick }) {
  return (
    <div className="logs-section">
      {pins.map((pin, index) => (
        <LogCard key={index} item={pin} onCardClick={onCardClick} />
      ))}
    </div>
  );
}
export default LogsSection;
