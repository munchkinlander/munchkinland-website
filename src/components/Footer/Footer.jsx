import "./Footer.scss";
import { Link } from "react-router-dom";
import instagram from "../../assets/icons/Instagram_icon.png";
import etsy from "../../assets/icons/Etsy_icon.png";
import mascot from "./../../assets/logo/mascot.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social">
        <h3 className="footer__title">Socials</h3>
        <div className="footer__icons">
          <a
            href="https://www.instragram.com/munchkinlanddesigns"
            target="blank"
          >
            <img
              src={instagram}
              className="footer__icon"
              alt="Instragram logo"
            />
          </a>
          <a href="https://www.linkedin.com/in/lisa-m-olsen" target="blank">
            <img src={etsy} className="footer__icon" alt="Etsy logo" />
          </a>
        </div>
      </div>
      <ul className="footer__sitemap">
        <li className="footer__link">
          {" "}
          <Link to="/">Home</Link>
        </li>
        <span>|</span>
        <li className="footer__link">
          <Link to="/about">About</Link>
        </li>
        <span>|</span>
        <li className="footer__link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="footer__copy">
        <img
          className="footer__logo"
          src={mascot}
          alt="mascot logo home button"
        />
        <p className="footer__text">
          © 2025 Katelyn Lagace | Munchkinland Designs
        </p>
      </div>
    </footer>
  );
}
