import "./Sidebar.css";

function Sidebar({ onEditProfileClick }) {
  return (
    <div className="sidebar">
      <button className="sidebar__button" onClick={onEditProfileClick}>
        Edit profile
      </button>
      <p>Log out</p>
    </div>
  );
}

export default Sidebar;
