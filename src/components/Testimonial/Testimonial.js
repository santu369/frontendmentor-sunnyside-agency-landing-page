import React from "react";
import "./Testimonial.scss";

const Testimonial = ({ userImg, userStatement, userName, userRole }) => {
  return (
    <div className="Testimonial mt-5 mb-2">
      <img
        className="Testimonial__user-img rounded-circle mb-4"
        src={userImg}
        alt={userName}
      />
      <p className="Testimonial__user-statement">{userStatement}</p>
      <div className="Testimonial__user-details">
        <strong className="Testimonial__user-name d-block mb-1">
          {userName}
        </strong>
        <p className="Testimonial__user-role">{userRole}</p>
      </div>
    </div>
  );
};

export default Testimonial;
