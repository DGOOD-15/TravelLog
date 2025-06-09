import "./Profile.css";
import LogsSection from "../LogsSection/LogsSection";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
// working modals
function Profile({ onLogClick, onEditProfileClick, pins }) {
  return (
    <div className="profile">
      <LogsSection onCardClick={onLogClick} pins={pins} />
      <EditProfileModal />
    </div>
  );
}

export default Profile;
