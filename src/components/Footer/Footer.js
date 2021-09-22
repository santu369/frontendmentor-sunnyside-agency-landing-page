import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <p>
        Challenge by
        <a
          href="https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
      </p>
      <p>
        Coded by
        <a
          className="footer__link"
          href="https://twitter.com/santu69"
          rel="noopener noreferrer"
          target="_blank"
        >
          Shiva Santosh Jana
        </a>
      </p>
    </footer>
  );
};

export default Footer;
