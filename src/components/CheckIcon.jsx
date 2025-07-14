import React from "react";

const CheckIcon = ({ fillColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="20"
      className="check-icon"
      viewBox="0 0 9 9"
    >
      <path
        fill="none"
        stroke={fillColor}
        strokeWidth="2"
        d="M1 4.304L3.696 7l6-6"
      />
    </svg>
  );
};

export default CheckIcon;
