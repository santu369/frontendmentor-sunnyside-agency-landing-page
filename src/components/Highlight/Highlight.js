import React from "react";
import "./Highlight.scss";

const Highlight = ({ desktopIcon, mobileIcon, heading, lead, fontColor }) => {
  return (
    <div className="Highlights position-relative">
      <picture className="Highlights__illustration Highlights__half">
        <source media="(min-width:48rem)" srcSet={desktopIcon} />
        <source media="(min-width:0rem)" srcSet={mobileIcon} />
        <img src={desktopIcon} alt="" />
      </picture>
      <div
        className="Highlights__text position-absolute bottom-0"
        data-highlight={fontColor}
      >
        <h3 className="Highlights__heading m-4">{heading}</h3>
        <p className="Highlights__lead">{lead}</p>
      </div>
    </div>
  );
};

export default Highlight;
