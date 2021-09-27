/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Hero.scss";
import downArrow from "../../images/icon-arrow-down.svg";

const Hero = () => {
  return (
    <div className="Hero d-flex flex-column gap-5 align-items-center">
      <header>
        <h1 className="Hero__heading d-block text-uppercase">
          we are creatives
        </h1>
      </header>
      <a className="Hero__down-arrow" href="#content">
        <img src={downArrow} alt="Scroll DowTo Content" />
      </a>
    </div>
  );
};

export default Hero;
