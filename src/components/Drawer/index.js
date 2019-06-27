import React from "react";
import cn from "classnames";

// components
import EventListener from "react-event-listener";

// enhancers
import { enhance } from "./enhance";

class Drawer extends React.Component {
  static defaultProps = {
    position: "left",
    isOpen: false,
    onClose: f => f,
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
      onClose(e);
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
