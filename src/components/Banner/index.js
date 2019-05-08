import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

// assets
import Icon from "components/Icon";

// enhancers
import { enhance } from "./enhance";

/**
 * Component displays a prominent banner message and icon.
 * It is designed to display a message at the top of the page.
 * Banner animates its opening and closing.
 */
class Banner extends React.Component {
  static propTypes = {
    /**
     * Content to be shown next to the icon
     */
    children: PropTypes.node,
    /**
     * Class name string to be merged to the root node
     */
    className: PropTypes.string,
    /**
     * [JSS](http://cssinjs.org/react-jss/) classes object notation
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
     * Callback fired when the component requests to be closed. Typically onClose is used to set state in the parent component, which is used to control the Banner's `isOpen` prop.
     */
    onClose: PropTypes.func,
    /**
     * Callback fired when `Banner` is opening
     */
    onEnter: PropTypes.func,
    /**
     * Callback fired when `Banner` is closing
     */
    onExit: PropTypes.func,
  };

  componentDidUpdate (oldProps) {
    const { isOpen, onEnter, onExit } = this.props;

    const isOpening = !oldProps.isOpen && isOpen;
    const isClosing = oldProps.isOpen && !isOpen;

    if (isOpening) {
      onEnter && onEnter();
      this.startTimeout();
    }

    if (isClosing) {
      this.endTimeout();
      onExit && onExit();
    }
  }

  componentWillUnmount () {
    this.endTimeout();
  }

  startTimeout () {
    const { autoCloseTimeout, onClose } = this.props;

    if (autoCloseTimeout) {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(() => {
        onClose && onClose("timeout");
      }, autoCloseTimeout);
    }
  }

  endTimeout () {
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
      onEnter,
      onExit,
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
