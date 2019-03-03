import React, { Component } from "react";
import cn from "classnames";

import Typography from "components/Typography";

import { enhance } from "./enhance";

class Badge extends Component {
  static defaultProps = {
    color: "default",
  };

  render () {
    const { className, classes, children, color, theme, ...rest } = this.props;

    return (
      <Typography
        {...rest}
        className={cn(classes.root, classes[color], className)}
        component="div"
      >
        {children}
      </Typography>
    );
  }
}

export default enhance(Badge);
