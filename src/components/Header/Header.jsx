import "./Header.scss";
import { Link } from "react-router-dom";
import mascot from "./../../assets/images/mascot.jpg";

export default function Header () {
    return (
      <header className="header">
        <Link to="/">
          <img
            className="header__logo"
            src={mascot}
            alt="mascot logo home button"
          />
        </Link>
        <div className="header__links">
          <Link className="header__link mobile" to="/">
            Home
          </Link>
          <span className="header__divider mobile">|</span>
          <Link className="header__link" to="/about">
            About
          </Link>
          <span className="header__divider">|</span>
          <Link className="header__link" to="/contact">
            Contact
          </Link>
        </div>
      </header>
    );
}