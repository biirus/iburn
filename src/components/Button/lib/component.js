import React from "react";

const StyledButton = props => <button {...props} type="button" />;
StyledButton.displayName = "StyledButton";

const StyledAnchor = ({ children, ...rest }) => <a {...rest}>{children}</a>;
StyledAnchor.displayName = "StyledAnchor";

const StyledSpan = props => <span {...props} />;
StyledSpan.displayName = "StyledSpan";

export default props => {
  const { disabled, href } = props;

  if (href) {
    return disabled ? StyledSpan : StyledAnchor;
  }

  return StyledButton;
};
