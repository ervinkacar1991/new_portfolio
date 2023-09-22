import React from "react";
import "./footer.css";
import { GrFacebookOption } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

function Footer() {
  return (
    <footer>
      <a href="#footer" className="footer__logo">
        PORTFOLIO
      </a>
      <ul className="permalinks">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.facebook.com/ervin.kacar/"
          target="_blank"
          rel="noreferrer"
        >
          <GrFacebookOption />
        </a>
        <a
          href="https://www.instagram.com/ervin_kacar/"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; PORTFOLIO. All right reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
