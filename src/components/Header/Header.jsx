import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/travellogo.png";
import globe from "../../assets/globewatercolor.jpg";
import avatar from "../../assets/avatarPlaceholder.jpg";
//georgia
function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link">
          <img className="header__logo" src={logo} alt="Memory Map Logo" />
        </Link>
        <img className="header__image" src={globe} alt="Globe Water Color" />
        <button className="header__login-button">Login</button>
        <div className="header__user-container">
          <button className="header__add-log-button">New log</button>
          <div className="header__user-details">
            <Link to="/profile" className="header__link">
              <img className="header__avatar" src={avatar} />
              <p className="header__username">Josh Johnson</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
