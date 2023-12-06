import React from "react";
import { Link } from "react-router-dom";
import leftArr from "../image/left-arrow.png";
function BackButton({ destination = "/" }) {
  return (
    <div>
      <Link to={destination}>
        <img
          src={leftArr}
          style={{ height: "50px", width: "60px" }}
          alt="arrow"
        />
      </Link>
    </div>
  );
}

export default BackButton;
