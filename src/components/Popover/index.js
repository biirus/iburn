import React from "react";
import { createPortal } from "react-dom";
import cn from "classnames";

// lib
import getSafeZone from "./lib/get-safe-zone";
import getPositions from "./lib/get-positions";
import getOffset from "./lib/get-offset";

// components
import EventListener from "react-event-listener";

// enhancers
import { enhance } from "./enhance";

class Popover extends React.Component {
  static defaultProps = {
    position: "",
    isOpen: false,
    onOpen: f => f,
    onClose: f => f,
  };

  constructor (props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount () {
    document.body.appendChild(this.el);

    const { isOpen, onOpen, } = this.props;

    if (isOpen) {
      onOpen();

      // wait for onOpen
      setTimeout(() => {
        this.setPosition();
      }, 0);
    }
  }

  componentWillUnmount () {
    document.body.removeChild(this.el);
  }

  componentDidUpdate (oldProps) {
    const { isOpen, onOpen, } = this.props;

    if (!oldProps.isOpen && isOpen) {
      onOpen();

      // wait for onOpen
      setTimeout(() => {
        this.setPosition();
      }, 0);
    }
  }

  setPosition = () => {
    const { trigger, position, } = this.props;

    const triggerRect = trigger.getBoundingClientRect();
    const popoverRect = this.popover.getBoundingClientRect();

    const { left, top, } = triggerRect;
    const { scrollX, scrollY, } = window;

    const safeZone = getSafeZone(triggerRect, popoverRect);
    const positions = getPositions(safeZone, position);

    const triggerOffset = getOffset(triggerRect, positions, true);
    const popoverOffset = getOffset(popoverRect, positions, false);

    const x = left + scrollX + triggerOffset.h + popoverOffset.h;
    const y = top + scrollY + triggerOffset.v + popoverOffset.v;

    this.popover.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  isClickInPopover = ({ target, }) => {
    return this.popover.contains(target) || this.props.trigger.contains(target);
  };

  handleKeyDown = e => {
    const { isOpen, } = this.props;

    if (isOpen && e.code === "Escape") {
      this.handleClose(e);
    }
  };

  handleClick = e => {
    const { isOpen, } = this.props;

    if (isOpen && !this.isClickInPopover(e)) {
      this.handleClose(e);
    }
  };

  handleResize = () => {
    const { isOpen, } = this.props;

    if (isOpen) {
      this.setPosition();
    }
  };

  handleClose = e => {
    this.props.onClose(e);
  };

  renderContent () {
    const {
      className,
      classes,
      trigger,
      children,
      isOpen,
      width,
      onOpen,
      onClose,
      theme,
      sheet,
      ...rest
    } = this.props;

    const classNames = cn(classes.root, className, {
      [classes.open]: isOpen,
    });

    const style = width ? { minWidth: `${width}px`, } : {};

    return (
      <div
        {...rest}
        style={style}
        className={classNames}
        ref={el => (this.popover = el)}
      >
        <EventListener
          target="window"
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          onResize={this.handleResize}
        />
        <div className={classes.inner}>{children}</div>
      </div>
    );
  }

  render () {
    return createPortal(this.renderContent(), this.el);
  }
}

export default enhance(Popover);
