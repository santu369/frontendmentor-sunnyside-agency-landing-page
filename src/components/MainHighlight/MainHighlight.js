/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./MainHighlight.scss";

const MainHighlight = ({
  desktopIcon,
  mobileIcon,
  heading,
  lead,
  ctaHighlight,
  textOrder,
  imageOrder,
}) => {
  return (
    <div className="MainHighlights w-100 d-flex align-items-center">
      <div
        className="MainHighlights__img-container MainHighlights__half"
        data-image-order={imageOrder}
      >
        <picture className="MainHighlights__illustration">
          <source media="(min-width:48rem)" srcSet={desktopIcon} />
          <source media="(min-width:0rem)" srcSet={mobileIcon} />
          <img src={desktopIcon} alt="" />
        </picture>
      </div>
      <div
        className="MainHighlights__text MainHighlights__half d-flex flex-column align-items-center justify-content-center"
        data-text-order={textOrder}
      >
        <div className="MainHighlights__text-container">
          <h2 className="MainHighlights__heading">{heading}</h2>
          <p className="MainHighlights__lead">{lead}</p>
          <a
            href="#"
            className="MainHighlights__cta text-uppercase"
            data-highlight={ctaHighlight}
          >
            learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainHighlight;
