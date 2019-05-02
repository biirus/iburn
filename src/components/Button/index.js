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
  };

  static propTypes = {
    /**
     * Class name string to be merged to the root node
     */
    className: PropTypes.string,
    /**
     * [JSS](http://cssinjs.org/react-jss/?v=v8.5.1) classes object notation
     */
    classes: PropTypes.object,
    /**
     * Link `href` attribute. If is set `Button` will be redered as `a` element.
     */
    href: PropTypes.string,
    /**
     * If `true` button will have a `selected` styles.
     * This prop is helpfull to deal with Dropdowns or ButtonGroups
     */
    selected: PropTypes.bool,
    /**
     * The padding of a button.
     * It can be a full width of it's parent, inlined with text and have a dense paddings.
     */
    padding: PropTypes.oneOf(["block", "inline", "compact"]),
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
     * The button appearance variant
     */
    variant: PropTypes.oneOf(["link", "thin"]),
    /**
     * The custom component to render the root node
     */
    component: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.object,
    ]),
    /**
     * Icon that is placed before label
     */
    icon: PropTypes.node,
    /**
     * Icon that is placed after label
     */
    iconAfter: PropTypes.node,
  };

  render () {
    const {
      className,
      classes,
      selected,
      padding,
      variant,
      color,
      theme,

      children,
      component,
      icon,
      iconAfter,
      ...rest
    } = this.props;

    const classNames = cn(classes.root, className, classes[variant], {
      [classes.selected]: selected,
      [classes.compact]: padding === "compact",
      [classes.inline]: padding === "inline",
      [classes.block]: padding === "block",
      [classes[color]]: color && !["link", "thin"].includes(variant),
    });

    const Component = component || getComponent(this.props);

    return (
      <Component {...rest} className={classNames}>
        {icon && <span className={classes.icon}>{icon}</span>}
        {children && <span className={classes.content}>{children}</span>}
        {iconAfter && <span className={classes.iconAfter}>{iconAfter}</span>}
      </Component>
    );
  }
}

export default enhance(Button);
