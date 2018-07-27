import React from "react";
import icons from "./sprite";

const Icon = ({ label, size = 24, ...rest }) => {
  return (
    <svg
      width={size}
      height={size}
      {...rest}
      focusable="false"
      role="presentation"
      viewBox="0 0 24 24"
    >
      {icons[label]}
    </svg>
  );
};

export default Icon;
