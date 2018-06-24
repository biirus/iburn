import React from "react";
import icons from "./sprite";

export default ({ label, size = 24, ...rest }) => {
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
