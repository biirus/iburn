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
 * Buttons allow users to take actions, and make choices, with a single tap.
 */
class Button extends React.Component {
  static defaultProps = {
    selected: false,
    color: "default",
    // type: "button",
  };

  static propTypes = {
    /**
     * Class name string to be merged to root node
     */
    className: PropTypes.string,
    /**
     * [JSS](http://cssinjs.org/react-jss/?v=v8.5.1) classes object notation
     */
    classes: PropTypes.object,
    /**
     * If `true` button will have a `selected` styles.
     * This prop is helpfull to deal with Dropdowns or ButtonGroups
     */
    selected: PropTypes.bool,
    /**
     * The size of button.
     * It can be full width of it's parent, inlined with text and have a dense paddings.
     */
    size: PropTypes.oneOf(["block", "inline", "compact"]),
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
     * The button appearance
     */
    view: PropTypes.oneOf(["link", "thin"]),
    /**
     * The custom component to render the root node
     */
    component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.object,
    ]),
    /**
     * Icon element that is placed before label
     */
    icon: PropTypes.element,
    /**
     * Icon element that is placed after label
     */
    iconAfter: PropTypes.element,
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
      [classes[view]]: ["link", "thin"].includes(view),
      [classes[color]]: color && !["link", "thin"].includes(view),
    });

    const Component = component || getComponent(this.props);

    return (
      <Component {...rest} className={classNames}>
        {icon}
        {children && <span className={classes.content}>{children}</span>}
        {iconAfter}
      </Component>
    );
  }
}

export default enhance(Button);
