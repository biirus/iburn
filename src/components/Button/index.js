import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import getComponent from "./lib/component";

// enhancers
import withStyles from "react-jss";

// styles
import styles from "./styles";

const enhance = withStyles(styles);

/**
 * Button Component
 */
class Button extends React.Component {
  static defaultProps = {
    view: "default",
    color: "default",
    selected: false,
    size: null,
  };

  render () {
    const {
      className,
      classes,
      selected,
      size,
      view,
      color,
      sheet,
      theme,

      children,
      component,
      icon,
      iconAfter,
      ...rest
    } = this.props;

    const classNames = cn(classes.root, className, {
      [classes.selected]: selected,
      [classes.compact]: size === "compact",
      [classes.inline]: size === "inline",
      [classes.block]: size === "block",
      [classes[view]]: view,
      [classes[color]]: color && view !== "link",
    });

    const Component = component || getComponent(this.props);

    const isOnlyIcon =
      (!!icon && !children && !iconAfter) ||
      (!!iconAfter && !children && !icon);

    const iconClassName = cn(classes.icon, {
      [classes.isOnlyIcon]: isOnlyIcon,
    });

    return (
      <Component {...rest} className={classNames}>
        <span className={classes.wrapper}>
          {icon && (
            <span className={cn(iconClassName, classes.leftIcon)}>{icon}</span>
          )}

          {children && <span className={classes.content}>{children}</span>}

          {iconAfter && (
            <span className={cn(iconClassName, classes.rightIcon)}>
              {iconAfter}
            </span>
          )}
        </span>
      </Component>
    );
  }
}

export default enhance(Button);
