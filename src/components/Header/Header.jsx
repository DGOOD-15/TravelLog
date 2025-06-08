import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/travellogo.png";
import globe from "../../assets/globewatercolor.jpg";
import avatar from "../../assets/avatarPlaceholder.jpg";

function Header({ onSignUpClick, onLoginClick, onAddLogClick }) {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="logIn">
          <img className="header__logo" src={logo} alt="Memory Map Logo" />
        </Link>
        <img className="header__image" src={globe} alt="Globe Water Color" />
        <div className="header__profile-buttons-signedout">
          <Link to="/" name="header__link">
            <button
              onClick={onLoginClick}
              className="header__profile-buttons header__profile-buttons--login"
            >
              Login
            </button>
          </Link>
          <Link to="/" name="signUp">
            <button
              onClick={onSignUpClick}
              className="header__profile-buttons header__profile-buttons--signup"
            >
              Sign Up
            </button>
          </Link>
        </div>

        <div className="header__user-container">
          <div className="header__profile-buttons-signedin">
            <Link to="/profile" className="header__link">
              <button
                onClick={onAddLogClick}
                className="header__profile-buttons header__profile-buttons--addlog"
              >
                My Travel Log
              </button>
            </Link>
            <button className="header__profile-buttons header__profile-buttons--signout">
              Log Out
            </button>
          </div>
          <div className="header__user-details">
            <img className="header__avatar" src={avatar} />
            <p className="header__username">Josh Johnson</p>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
