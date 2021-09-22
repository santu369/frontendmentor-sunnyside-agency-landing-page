import React from "react";
import "./ImageGallery.scss";

const ImageGallery = ({ images }) => {
  return images.map((image, index) => {
    return (
      <div className="ImageGallery" key={index}>
        <picture className="ImageGallery__illustration img-fluid">
          <source media="(min-width:48rem)" srcSet={image.desktopIcon} />
          <source media="(min-width:0rem)" srcSet={image.mobileIcon} />
          <img className="w-100" src={image.desktopIcon} alt="" />
        </picture>
      </div>
    );
  });
};

export default ImageGallery;
