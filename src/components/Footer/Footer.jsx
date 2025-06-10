import "./Footer.css";
import logo from "../../assets/travellogo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__text">
          <p className="footer__text-copyright">2025 &copy; Travel Log</p>
          <p className="footer__text-authors">
            Created by: Dustin Goodwin, Georgia Lloyd, Jaimie Bowen
          </p>
        </div>
        <img className="footer__logo" src={logo} alt="Travel Log Logo" />
      </div>
    </footer>
  );
}

export default Footer;
