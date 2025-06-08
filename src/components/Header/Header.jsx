import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/travellogo.png";
import globe from "../../assets/globewatercolor.jpg";
import avatar from "../../assets/avatarPlaceholder.jpg";

function Header({ onSignUpClick, onLoginClick, onAddLogClick, isLoggedIn, handleLogout }) {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link">
          <img className="header__logo" src={logo} alt="Memory Map Logo" />
        </Link>
        <img className="header__image" src={globe} alt="Globe Water Color" />
        <div className="header__profile-buttons-signedout">
          <button
            onClick={onLoginClick}
              className={`header__profile-buttons header__profile-buttons--login ${
                !isLoggedIn ? "header__profile-buttons-visible" : ""
              }
              `}
          >
            Login
          </button>
          <button
              className={`header__profile-buttons header__profile-buttons--signup ${
                !isLoggedIn ? "header__profile-buttons-visible" : ""
              }
              `}
          >
            Sign Up
          </button>
        </div>

        <div className="header__user-container">
          <div className="header__profile-buttons-signedin">
            <button
              onClick={onAddLogClick}
              className={`header__profile-buttons header__profile-buttons--addlog ${
                isLoggedIn ? "header__profile-buttons-visible" : ""
              }
              `}
            >
              My Travel Log
            </button>
            <button
              className={`header__profile-buttons header__profile-buttons--signout ${
                isLoggedIn ? "header__profile-buttons-visible" : ""
              }
              `}
              onClick={handleLogout}
            >
              Sign Out
            </button>
          </div>
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
