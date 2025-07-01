import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/travellogo.webp";
import globe from "../../assets/globewatercolor.webp";
import avatar from "../../assets/avatarPlaceholder.webp";

function Header({
  onSignUpClick,
  onLoginClick,
  onAddLogClick,
  onEditProfileClick,
  isLoggedIn,
  handleLogout,
  currentUser,
}) {
  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="logIn">
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
            onClick={onSignUpClick}
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
            {!isProfilePage && (
              <Link to="/profile">
                <button
                  onClick={onAddLogClick}
                  className={`header__profile-buttons header__profile-buttons--addlog ${
                    isLoggedIn ? "header__profile-buttons-visible" : ""
                  }
              `}
                >
                  Travel Log
                </button>
              </Link>
            )}
            {isProfilePage && (
              <button
                className={`header__profile-buttons ${
                  isLoggedIn ? "header__profile-buttons-visible" : ""
                }
              `}
                onClick={onEditProfileClick}
              >
                Edit profile
              </button>
            )}
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
            <Link to="/profile">
              <img
                className={`header__avatar ${
                  isLoggedIn ? "header__avatar-visible" : ""
                }`}
                src={currentUser?.profilePic || avatar}
              />
              <p
                className={`header__username ${
                  isLoggedIn ? "header__username-visible" : ""
                }`}
              >
                {currentUser?.name || "Anonymous"}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
