/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./ChallengeFooter.scss";
import logo from "../../images/logo.svg";
import facebookLogo from "../../images/icon-facebook.svg";
import instagramLogo from "../../images/icon-instagram.svg";
import twitterLogo from "../../images/icon-twitter.svg";
import pinterestLogo from "../../images/icon-pinterest.svg";

const ChallengeFooter = () => {
  console.log(logo.svg);
  return (
    <div className="ChallengeFooter px-3 py-5">
      <div className="ChallengeFooter__logo">
        <img className="w-100" src={logo} alt="" />
      </div>
      <ul className="ChallengeFooter__list my-4 d-flex flex-wrap justify-content-evenly">
        <li className="ChallengeFooter__list-item">
          <a className="ChallengeFooter__list-link" href="#">
            About
          </a>
        </li>
        <li className="ChallengeFooter__list-item">
          <a className="ChallengeFooter__list-link" href="#">
            Services
          </a>
        </li>
        <li className="ChallengeFooter__list-item">
          <a className="ChallengeFooter__list-link" href="#">
            Projects
          </a>
        </li>
      </ul>
      <ul className="ChallengeFooter__social-list mt-5 d-flex gap-3 justify-content-center">
        <li className="ChallengeFooter__social-list-item">
          <a href="#" className="ChallengeFooter__social-link">
            <img
              className="ChallengeFooter__social-icon"
              src={facebookLogo}
              alt="Visit Facebook Page"
            />
          </a>
        </li>
        <li className="ChallengeFooter__social-list-item">
          <a href="#" className="ChallengeFooter__social-link">
            <img
              className="ChallengeFooter__social-icon"
              src={instagramLogo}
              alt="Visit Instagram Page"
            />
          </a>
        </li>
        <li className="ChallengeFooter__social-list-item">
          <a href="#" className="ChallengeFooter__social-link">
            <img
              className="ChallengeFooter__social-icon"
              src={twitterLogo}
              alt="Visit Twitter Page"
            />
          </a>
        </li>
        <li className="ChallengeFooter__social-list-item">
          <a href="#" className="ChallengeFooter__social-link">
            <img
              className="ChallengeFooter__social-icon"
              src={pinterestLogo}
              alt="Visit Pinterest Page"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ChallengeFooter;
