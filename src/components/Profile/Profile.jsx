import "./Profile.css";
import LogsSection from "../LogsSection/LogsSection";
import Sidebar from "../Sidebar/Sidebar";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
// working modals
function Profile({
  onLogClick,
  onEditProfileClick
}) {
  return (
    <div className="profile">
      <Sidebar 
        onEditProfileClick={onEditProfileClick}
      />
      <LogsSection
        onCardClick={onLogClick}
      />
      <EditProfileModal />
    </div>
  );
}

export default Profile;
