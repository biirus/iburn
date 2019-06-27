import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// components
import EventListener from "react-event-listener";

// enhancers
import { enhance } from "./enhance";

class Drawer extends React.Component {
  static defaultProps = {
    position: "left",
    isOpen: false,
  };

  static propTypes = {
    /**
     * Class name string to be merged to the root node
     */
    className: PropTypes.string,
    /**
     * [JSS](http://cssinjs.org/react-jss/) classes object notation
     */
    classes: PropTypes.object,
    /**
     * Defines position where `Drawer` will be open
     */
    position: PropTypes.string,
    /**
     * Shows is `Drawer` open or not
     */
    isOpen: PropTypes.bool,
    /**
     * Callback fires when `Drawer` enter
     */
    onEnter: PropTypes.func,
    /**
     * Callback fires when `Drawer` exit
     */
    onExit: PropTypes.func,
    /**
     * Callback fired when the `Drawer` requests to be closed
     */
    onClose: PropTypes.func,
  };

  componentDidMount () {
    const { isOpen, onEnter } = this.props;

    if (isOpen) {
      onEnter && onEnter();
    }
  }

  componentDidUpdate (oldProps) {
    const { isOpen, onEnter, onExit } = this.props;

    if (!oldProps.isOpen && isOpen) {
      onEnter && onEnter();
    } else if (oldProps.isOpen && !isOpen) {
      onExit && onExit();
    }
  }

  handleKeyDown = e => {
    const { isOpen, onClose } = this.props;

    if (isOpen && e.code === "Escape") {
      onClose && onClose(e);
    }
  };

  render () {
    const {
      className,
      classes,
      children,
      position,
      isOpen,
      onEnter,
      onExit,
      onClose,
      theme,
      sheet,
      ...rest
    } = this.props;

    const classNames = cn(classes.content, className, {
      [classes.open]: isOpen,
      [classes.fromLeft]: position === "left",
      [classes.fromRight]: position === "right",
    });

    return (
      <div {...rest} className={cn(classes.root, { [classes.open]: isOpen })}>
        <EventListener target="window" onKeyDown={this.handleKeyDown} />
        <div
          className={cn(classes.overlay, { [classes.open]: isOpen })}
          onClick={onClose}
        />

        <div className={classNames}>{children}</div>
      </div>
    );
  }
}

export default enhance(Drawer);
