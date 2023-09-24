import React from "react";
import "./footer.css";

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
          <a href="#services">Portfolio</a>
        </li>

        <li>
          <a href="#services">Projects</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="kacarervin@gmail.com" target="_blank" rel="noreferrer">
          <i class="uil uil-envelope-alt"></i>
        </a>
        <a
          href="https://github.com/ervinkacar1991"
          target="_blank"
          rel="noreferrer"
        >
          <i class="uil uil-github-alt"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ervin-kacar/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="uil uil-linkedin"></i>
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; PORTFOLIO. Ervin Kacar</small>
      </div>
    </footer>
  );
}

export default Footer;
