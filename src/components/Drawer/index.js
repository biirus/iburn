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
    onOpen: f => f,
    onClose: f => f
  };

  componentDidMount() {
    if (this.props.isOpen) {
      this.handleOpen();
    }
  }

  componentDidUpdate(oldProps) {
    const { isOpen } = this.props;

    if (!oldProps.isOpen && isOpen) {
      this.handleOpen();
    } else if (oldProps.isOpen && !isOpen) {
      this.handleClose();
    }
  }

  handleKeyDown = e => {
    const { isOpen, onClose } = this.props;

    if (isOpen && e.code === "Escape") {
      this.handleClose();
      onClose(e);
    }
  };

  handleOpen = e => {
    document.body.classList.add("fixed");
    this.props.onOpen(e);
  };

  handleClose = e => {
    document.body.classList.remove("fixed");
  };

  render() {
    const {
      className,
      classes,
      children,
      position,
      isOpen,
      onOpen,
      onClose,
      theme,
      sheet,
      ...rest
    } = this.props;

    const classNames = cn(classes.content, className, {
      [classes.open]: isOpen,
      [classes.fromLeft]: position === "left",
      [classes.fromRight]: position === "right"
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
