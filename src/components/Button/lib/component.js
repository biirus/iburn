import React from "react";

const StyledButton = props => <button {...props} />;
StyledButton.displayName = "StyledButton";

const StyledA = ({ children, ...rest }) => <a {...rest}>{children}</a>;
StyledA.displayName = "StyledA";

const StyledSpan = props => <span {...props} />;
StyledSpan.displayName = "StyledSpan";

export default props => {
  const { disabled, href, } = props;

  if (href) {
    return disabled ? StyledSpan : StyledA;
  }

  return StyledButton;
};
