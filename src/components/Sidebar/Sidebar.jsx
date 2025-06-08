import "./Sidebar.css";

function Sidebar({
    onEditProfileClick
}) {
    return (
        <div className="sidebar">
            <p className="sidebar__link" onClick={onEditProfileClick}>Edit profile</p>
            <p>Log out</p>
        </div>
    );
}

export default Sidebar;