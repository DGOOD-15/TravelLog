import "./Header.css";
import logo from "../../assets/travellogo.png";
import globe from "../../assets/globewatercolor.jpg";
import avatar from "../../assets/avatarPlaceholder.jpg";

function Header() {
  // logo on the left
  // login button
  //add new log
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Memory Map Logo" />
        <img className="header__image" src={globe} alt="Globe Water Color" />
        <div className="header__profile-buttons-signedout">
          <button className="header__profile-buttons header__profile-buttons--login">
            Login
          </button>
          <button className="header__profile-buttons header__profile-buttons--signup">
            Sign Up
          </button>
        </div>

        <div className="header__user-container">
          {/* Putting the login button in this container 
              - if the user is logged in we will render the add-log-button as well
              as the user info and remove the login button
              
              Will add the conditional statements later. Can style as normal,
              but will show all three items until I fix the logic. After logic
              only Login button will show
              
              upon successful login, login-button dissapears and add-log-button
              and the user info will be visible and need a flexbox*/}

          <div className="header__profile-buttons-signedin">
            <button className="header__profile-buttons header__profile-buttons--addlog">
              My Travel Log
            </button>
            <button className="header__profile-buttons header__profile-buttons--signout">
              Sign Out
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
