import "./Profile.css";
import LogsSection from "../LogsSection/LogsSection";

function Profile({ pins, setPins, handleDeletePin }) {
  return (
    <div className="profile">
      <LogsSection
        logs={pins}
        setLogs={setPins}
        handleDeletePin={handleDeletePin}
      />
    </div>
  );
}

export default Profile;
