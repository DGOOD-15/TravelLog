import "./Sidebar.css";

function Sidebar({
    onAddLogClick
}) {
    return (
        <div className="sidebar">
            <p onClick={onAddLogClick} className="sidebar__link">Add travel log</p>
            <p>Edit profile</p>
            <p>Log out</p>
        </div>
    );
}

export default Sidebar;