import "./Profile.css";
import LogsSection from "../LogsSection/LogsSection";
import Sidebar from "../Sidebar/Sidebar";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

function Profile({
  onAddLogClick
}) {
  return (
    <div className="profile">
      <Sidebar 
        onAddLogClick={onAddLogClick}
      />
      <LogsSection />
      <EditProfileModal />
    </div>
  );
}

export default Profile;
