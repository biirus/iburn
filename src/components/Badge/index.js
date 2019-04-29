import React, { Component } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Typography from "components/Typography";

import { enhance } from "./enhance";

/**
 * A really simple component to emphasis small block of information.
 * For example `counters`, `inline-code-blocks` etc.
 */
class Badge extends Component {
  static defaultProps = {
    color: "default",
    component: Typography,
  };

  static propTypes = {
    /**
     * The color of component. It supports the theme meaningfull values
     */
    color: PropTypes.oneOf([
      "default",
      "primary",
      "warning",
      "error",
      "success",
      "info",
    ]),

    /**
     * The custom component to render the root node
     */
    component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.object,
    ]),
  };

  render () {
    const {
      className,
      classes,
      children,
      color,
      component: Component,
      theme,
      ...rest
    } = this.props;

    return (
      <Component
        {...rest}
        className={cn(classes.root, classes[color], className)}
      >
        {children}
      </Component>
    );
  }
}

export default enhance(Badge);
