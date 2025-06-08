import "./Profile.css";
import LogsSection from "../LogsSection/LogsSection";
import Sidebar from "../Sidebar/Sidebar";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
// working modals
function Profile({
  onAddLogClick,
  onLogClick
}) {
  return (
    <div className="profile">
      <Sidebar 
        onAddLogClick={onAddLogClick}
      />
      <LogsSection
        onCardClick={onLogClick}
      />
      <EditProfileModal />
    </div>
  );
}

export default Profile;
