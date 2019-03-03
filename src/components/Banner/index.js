import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

// assets
import Icon from "components/Icon";

// enhancers
import { enhance } from "./enhance";

/**
 * Component that displays a prominent banner message and icon.
 * It is designed to display a message at the top of the page.
 * Banner animates its opening and closing.
 */
class Banner extends React.Component {
  static defaultProps = {
    onClose: f => f,
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
     * A custom icon element to be shown left of the main content
     */
    icon: PropTypes.node,
    /**
     * The Banner background color with default icon
     */
    color: PropTypes.oneOf(["warning", "success", "error", "info", "default"]),
    /**
     * Delay before calling `onClose` prop
     */
    autoCloseTimeout: PropTypes.number,
    /**
     * The callback that fires when `autoCloseTimeout` expires
     */
    onClose: PropTypes.func,
    /**
     * Content to be shown next to the icon
     */
    children: PropTypes.node,
  };

  componentDidUpdate (oldProps) {
    const { isOpen, autoCloseTimeout, onClose } = this.props;

    if (!oldProps.isOpen && isOpen && autoCloseTimeout) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(onClose, autoCloseTimeout);
    }
  }

  componentWillUnmount () {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  render () {
    const {
      icon,
      color,
      isOpen,
      classes,
      children,
      className,
      autoCloseTimeout,
      onClose,
      theme,
      ...rest
    } = this.props;

    const classNames = cn(classes.root, className, classes[color], {
      [classes.open]: isOpen,
    });

    return (
      <div {...rest} className={classNames}>
        {(icon || (color && color !== "default")) && (
          <span className={classes.icon}>
            {icon || <Icon label={`editor/${color}`} />}
          </span>
        )}
        <span className={classes.label}>{children}</span>
      </div>
    );
  }
}

export default enhance(Banner);
