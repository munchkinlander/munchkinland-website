import "./Footer.scss";
import instagram from "../../assets/icons/Instagram_icon.png"
import etsy from "../../assets/icons/Etsy_icon.png";

export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer__social">
          <h3 className="footer__title">Socials</h3>
          <div className="footer__icons">
            <a href="https://www.instragram.com/munchkinlanddesigns" target="blank">
              <img src={instagram} className="footer__icon" alt="Instragram logo" />
            </a>
            <a href="https://www.linkedin.com/in/lisa-m-olsen" target="blank">
              <img
                src={etsy}
                className="footer__icon"
                alt="Etsy logo"
              />
            </a>
          </div>
        </div>
        <div className="footer__copy">
          <p className="footer__text">© Katelyn Lagace | Munchkinland Designs 2025</p>
        </div>
      </footer>
    );
}