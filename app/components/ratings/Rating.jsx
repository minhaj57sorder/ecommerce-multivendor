import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
const starFunction = (val, toval, color) => {
  return val >= toval ? (
    <FontAwesomeIcon color={color} icon={faStar} />
  ) : val >= toval - 0.5 ? (
    <FontAwesomeIcon color={color} icon={faStarHalfAlt} />
  ) : (
    <FontAwesomeIcon color={color} icon={faStarOutline} />
  );
};

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating flex my-1 cursor-pointer">
      {starFunction(value, 1, color)}
      {starFunction(value, 2, color)}
      {starFunction(value, 3, color)}
      {starFunction(value, 4, color)}
      {starFunction(value, 5, color)}
      <span className="ms-2">{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8c725",
};

export default Rating;
