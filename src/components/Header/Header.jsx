import "./Header.scss";
import { Link } from "react-router-dom";
import mascot from "./../../assets/logo/mascot.png";

export default function Header () {
    return (
      <header className="header">
        <div className="header__logo-wrapper">
          <Link to="/">
            <img
              className="header__logo"
              src={mascot}
              alt="mascot logo home button"
            />
          </Link>
        </div>
        <div className="header__links">
          {/* <Link className="header__link mobile" to="/">
            Home
          </Link>
          <span className="header__divider mobile">|</span> */}
          <Link className="header__link" to="/about">
            About
          </Link>
          <span className="header__divider mobile">|</span>
          <div className="header__logo-wrapper">
            <Link to="/">
              <img
                className="header__logo mobile"
                src={mascot}
                alt="mascot logo home button"
              />
            </Link>
          </div>
          <span className="header__divider">|</span>
          <Link className="header__link" to="/contact">
            Contact
          </Link>
        </div>
      </header>
    );
}